import { FC } from 'react';
import { Container } from '../../../common/components';
import { BeerCard } from '../index';

interface RecipesPageProps {}

export const RecipesPage: FC<RecipesPageProps> = () => {
  return (
      <Container>
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
      </Container>
  );
}