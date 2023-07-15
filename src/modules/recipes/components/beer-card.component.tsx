import { FC } from 'react';
import { Link } from 'react-router-dom'
import { DividingLine } from '../../../common/components';

export interface BeerCardProps {
  id: number;
  image_url: string;
  name: string;
  firstBrewed: string;
  description: string;
  tagline: string;
}

export const BeerCard: FC<BeerCardProps> = ({ id, image_url, name, firstBrewed, tagline, description }) => {
  return (
    <Link to={`/${id}`}>
      <div className='flex items-center border-2 border-gray-100 rounded-2xl p-6 mb-6 hover:bg-gray-100'>
        <img className='w-14' src={image_url} alt="beer" />
        <DividingLine direction={'vertical'} />
        <div className='w-full'>
          <div className="flex justify-between">
            <h1 className='text-5xl font-viga'>{name}</h1>
            <span>{firstBrewed}</span>
          </div>
          <span className='font-medium'>{tagline}</span>
          <p className="pt-6">{description}</p>
        </div>
      </div>
    </Link>
  );
}