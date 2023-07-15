import { useState, useEffect } from 'react';
import { BeerInfo } from '../modules/dto/recipes';

interface useTakeBeerProps {
  pathname: string;
}

export const useTakeBeer = ({ pathname }: useTakeBeerProps) => {
  const beerId = pathname.slice(1);
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