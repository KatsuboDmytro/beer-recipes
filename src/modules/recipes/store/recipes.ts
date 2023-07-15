import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { BeerInfo } from '../../dto/recipes';

interface RecipeState {
  recipes: BeerInfo[];
  isLoading: boolean;
  errors: string[];
  setRecipes: (recipes: BeerInfo[]) => void;
  fetchRecipes: () => Promise<void>;
}

export const useRecipeStore = create(
  persist<RecipeState>(
    (set) => ({
      recipes: [],
      isLoading: false,
      errors: [],
      setRecipes: (recipes) => set({ recipes }),
      fetchRecipes: async () => {
        try {
          set({ isLoading: true });
          const response = await axios.get<BeerInfo[]>('https://api.punkapi.com/v2/beers?page=1');
          const data = response.data;
          set({ isLoading: false, recipes: data });
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      },
    }),
    {
      name: 'recipe-storage',
      getStorage: () => localStorage,
    }
  )
);