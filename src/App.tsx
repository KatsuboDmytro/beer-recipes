import { FC } from 'react';
import { Header } from './common/components';
import { RecipesPage } from './modules/recipes';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
      <>
        <Header />
        <RecipesPage />
      </>
  );
}