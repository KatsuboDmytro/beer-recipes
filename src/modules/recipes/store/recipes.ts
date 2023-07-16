import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { BeerInfo } from '../../dto/recipes';

interface RecipeState {
  recipes: BeerInfo[];
  pagination: BeerInfo[];
  isLoading: boolean;
  errors: string[];
  setRecipes: (recipes: BeerInfo[]) => void;
  fetchRecipes: (
    currentPage: number,
    setFetching: any,
    setCurrentPage: any,
    amountMin: number,
    amountMax: number,
  ) => Promise<void>;
  updateRecipes: (beerId:number, isChecked: boolean) => Promise<void>;
  deleteBeers: (beerId:number[]) => Promise<void>;
}
let amountWasDeleted = 0;
export const useRecipeStore = create(
  persist<RecipeState>(
    (set, get) => ({
      recipes: [],
      pagination: [],
      isLoading: false,
      errors: [],
      setRecipes: (recipes) => set({ recipes }),
      fetchRecipes: async (currentPage, setFetching, setCurrentPage, amountMin, amountMax) => {
        try {
          if ((currentPage * 25 - amountMax) < 15) {
            setCurrentPage((prevPage: number) => prevPage + 1);
          }
          const response = await axios.get<BeerInfo[]>(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
          const data = response.data;
          setFetching(false);
          const allItems = [...get().recipes, ...data];
          let uniqueItems = Array.from(new Set(
            allItems.map((recipe: BeerInfo | undefined) => recipe?.id)
          )).map((id: number | undefined) => allItems.find((recipe: BeerInfo | undefined) => recipe?.id === id))
            .filter((recipe: BeerInfo | undefined): recipe is BeerInfo => recipe !== undefined);
          set({ recipes: uniqueItems, pagination: uniqueItems.slice(amountMin, amountMax) });
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      }, 
      updateRecipes: async (beerId, checked) => {
        try {
          set((state) => ({
            recipes: state.recipes.map((recipe) => ({
              ...recipe,
              isChecked: recipe.id !== beerId ? recipe.isChecked : checked,
            })),
            pagination: state.pagination.map((pagination) => ({
              ...pagination,
              isChecked: pagination.id !== beerId ? pagination.isChecked : checked,
            }))
          }));
        } catch (error) {
          console.error('Error updating checked status:', error);
        }
      },
      deleteBeers: async (beerIds) => {
        try {
          set((state) => ({
            recipes: state.recipes.filter((beer) => !beerIds.includes(beer.id)),
            pagination: state.pagination.filter((beer) => !beerIds.includes(beer.id))
          }));
          
          amountWasDeleted = 15 - get().pagination.length;
          if (amountWasDeleted > 0) {
            const lastPaginationId = get().pagination[get().pagination.length - 1]?.id;
            const additionalItems = get().recipes.slice(lastPaginationId, lastPaginationId + amountWasDeleted);
            set((state) => ({
              pagination: [...state.pagination, ...additionalItems],
            }));
          }
        } catch (error) {
          console.error('Error deleting beers:', error);
        }
      },
    }),
    {
      name: 'recipe-storage',
      getStorage: () => localStorage,
    }
  )
);