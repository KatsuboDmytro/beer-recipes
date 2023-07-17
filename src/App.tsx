import { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './common/components';
import { RecipesPage } from './modules/recipes';
import { BeerInfoPage } from './modules/beerInfo';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<RecipesPage />} />
        <Route path='/:id' element={<BeerInfoPage />} />
      </Routes>
    </>
  );
}