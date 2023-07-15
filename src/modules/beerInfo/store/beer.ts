import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { BeerInfo } from '../../dto/recipes';

interface RecipeState {
  beer: BeerInfo[];
  isLoading: boolean;
  errors: string[];
  setBeer: (beer: BeerInfo[]) => void;
  fetchBeer: (beerId: string) => Promise<void>;
}

export const useBeerStore = create(
  persist<RecipeState>(
    (set) => ({
      beer: [],
      isLoading: false,
      errors: [],
      setBeer: (beer) => set({ beer }),
      fetchBeer: async (beerId) => {
        try {
          const response = await axios.get<BeerInfo[]>(`https://api.punkapi.com/v2/beers/${beerId}`);
          const data = response.data;
          set({ beer: data });
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      },
    }),
    {
      name: 'beer',
      getStorage: () => localStorage,
    }
  )
);