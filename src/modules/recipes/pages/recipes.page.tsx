import { FC, useEffect } from 'react';
import { Container } from '../../../common/components';
import { BeerCard } from '../index';
import { useRecipeStore } from '../store/recipes';

interface RecipesPageProps {}

export const RecipesPage: FC<RecipesPageProps> = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
      <Container>
        <div className="relative top-32">
          {recipes.map(beer => (
          <BeerCard
            key={beer.id}
            id={beer.id}
            image_url={beer.image_url}
            name={beer.name}
            firstBrewed={beer.first_brewed}
            tagline={beer.tagline}
            description={beer.description}
            checked={beer.isChecked}
          />
        ))}
        </div>
      </Container>
  );
}