import { FC } from 'react';
import { BeerInfo } from '../../../dto/recipes';

interface IngredientsProps {
  beer: BeerInfo | undefined;
}

export const Ingredients: FC<IngredientsProps> = ({beer}) => {
  return (
    <div className='w-1/3 text-center'>
      <div className="text-xl font-viga">INGREDIENTS</div>
      <div className="text-xl font-viga mt-8">MALT</div>
      <div className="ml-16">
        {beer?.ingredients.malt.map(malt => (
          <div key={malt?.name}><span className="font-viga text-right">{malt?.name}: </span>{malt?.amount.value} {malt?.amount.unit}</div>
        ))}
      </div>

      <div className="text-xl font-viga mt-8">HOPS</div>
      <div>
        {beer?.ingredients.hops.map(hops => (
          <div key={hops?.name}><span className="font-viga text-right">{hops?.name}: </span>{hops?.amount.value} {hops?.amount.unit}</div>
        ))}
      </div>

      <div className="mt-8"><span className="font-viga text-right">Yeast: </span>{beer?.ingredients.yeast}</div>
    </div>
  );
}