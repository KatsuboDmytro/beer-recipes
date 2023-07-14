import { FC } from 'react';

interface BeerCardProps {}

export const BeerCard: FC<BeerCardProps> = () => {
  return (
    <div className='flex items-center border-2 border-gray-100 rounded-2xl p-6 mb-6 hover:bg-gray-100'>
      <img className='w-14' src="https://images.punkapi.com/v2/keg.png" alt="beer" />
      <div className="w-1 h-28 bg-amber-400 mx-8"></div>
      <div className='w-full'>
        <div className="flex justify-between">
          <h1 className='text-5xl font-bold'>Buzz</h1>
          <span>09/2007</span>
        </div>
        <span className='font-medium'>A Real Bitter Experience.</span>
        <p className="pt-6">A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</p>
      </div>
    </div>
  );
}