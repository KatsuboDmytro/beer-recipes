import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { BeerInfo } from '../../dto/recipes';

interface RecipeState {
  recipes: BeerInfo[];
  isLoading: boolean;
  errors: string[];
  toDelete: BeerInfo[];
  setRecipes: (recipes: BeerInfo[]) => void;
  fetchRecipes: () => Promise<void>;
  updateRecipes: (beerId:number, isChecked: boolean) => Promise<void>;
 // checkedState: (checkedState: BeerInfo[]) => Promise<void>;
  deleteBeers: (beerId:number[]) => Promise<void>;
}

export const useRecipeStore = create(
  persist<RecipeState>(
    (set, get) => ({
      recipes: [],
      isLoading: false,
      errors: [],
      toDelete: [],
      setRecipes: (recipes) => set({ recipes }),
      fetchRecipes: async () => {
        try {
          if (get().recipes.length === 0) {
            set({ isLoading: true });
            const response = await axios.get<BeerInfo[]>('https://api.punkapi.com/v2/beers?page=1');
            const data = response.data;
            set({ isLoading: false, recipes: data });
          }
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
            }))
          }));
        } catch (error) {
          console.error('Error updating checked status:', error);
        }
      },
      deleteBeers: async (beerIds) => {
        try {
          set((state) => ({
            recipes: state.recipes.filter((recipe) => !beerIds.includes(recipe.id))
          }));
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