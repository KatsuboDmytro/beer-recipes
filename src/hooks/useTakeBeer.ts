import { useState, useEffect } from 'react';
import { BeerInfo } from '../modules/dto/recipes';

interface useTakeBeerProps {
  beerId: number | string;
}

export const useTakeBeer = ({ beerId }: useTakeBeerProps) => {
  const [recipes, setRecipes] = useState<BeerInfo[]>([]);


  useEffect(() => {
    const storedData = localStorage.getItem('recipe-storage');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRecipes(parsedData.state.recipes);
    }
  }, []);
  const beer = recipes.find((item) => item.id === +beerId);

  return { beer };
}