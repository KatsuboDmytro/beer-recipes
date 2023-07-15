import { FC } from 'react';
import { BeerInfo } from '../../../dto/recipes';

interface QuateProps {
  beer: BeerInfo | undefined;
}

export const Quate: FC<QuateProps> = ({beer}) => {
  return (
    <figure className="max-w-screen-md mx-auto text-center mb-48">
        <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <blockquote>
            <p className="text-2xl italic font-medium text-gray-900">"{beer?.brewers_tips}"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900">{beer?.contributed_by}</cite>
            </div>
        </figcaption>
    </figure>
  );
}