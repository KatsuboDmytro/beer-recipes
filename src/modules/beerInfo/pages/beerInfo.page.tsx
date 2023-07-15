import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, DividingLine } from '../../../common/components';
import { useTakeBeer } from '../../../hooks/useTakeBeer';
import { Details, Ingredients, Pairing, Quate } from '../index';

interface BeerInfoPageProps {}

export const BeerInfoPage: FC<BeerInfoPageProps> = () => {
  const { pathname } = useLocation();
  const beerId = pathname.slice(1);
  const { beer } = useTakeBeer({ beerId });

  return (
    <div className='relative top-32'>
      <Container>
        <div className='mb-24'>
          <h1 className="text-center text-6xl font-viga mb-8">
            Recipe: {beer?.name}
          </h1>
          <p className='text-center text-lg mb-8'>{beer?.tagline}</p>
          <DividingLine direction={'horizontal'} />
        </div>

        <div className="flex justify-center flex-wrap mb-24">
          <Details beer={beer} />
          <div className='w-84'>
            <img className='h-96 mx-auto' src={beer?.image_url} alt={`${beer?.name} beer`} />
          </div>
          <Ingredients beer={beer}/>
        </div>
      </Container>

      <Pairing beer={beer} />
      <Quate beer={beer} />
    </div>
  );
}