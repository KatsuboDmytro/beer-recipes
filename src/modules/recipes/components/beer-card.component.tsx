import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { DividingLine } from '../../../common/components';
import { useRecipeStore } from '../store/recipes';

export interface BeerCardProps {
  id: number;
  image_url: string;
  name: string;
  firstBrewed: string;
  description: string;
  tagline: string;
  checked: boolean;
}

export const BeerCard: FC<BeerCardProps> = ({ id, image_url, name, firstBrewed, tagline, description, checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const updateRecipes = useRecipeStore((state) => state.updateRecipes);

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsChecked(!isChecked);
    updateRecipes(id, !isChecked);
  };

  useEffect(() => {
    updateRecipes(id, false);
  }, []);

  return (
    <Link to={`/${id}`}>
      <div 
        className={`flex items-center border-2 border-gray-100 rounded-2xl p-6 mb-6 hover:bg-gray-100 
        ${checked && 'bg-gray-200 scale-105'}`}
        onContextMenu={handleContextMenu}
      >
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