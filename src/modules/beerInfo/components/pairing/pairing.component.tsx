import { FC } from 'react';
import { BeerInfo } from '../../../dto/recipes';

interface PairingProps {
  beer: BeerInfo | undefined;
}

export const Pairing: FC<PairingProps> = ({beer}) => {
  return (
    <div className='mb-24 bg-gray-200 flex justify-around'>
      {beer?.food_pairing.map((food: string) => (
        <span className='font-viga'>{food}</span>
      ))}
    </div>
  );
}