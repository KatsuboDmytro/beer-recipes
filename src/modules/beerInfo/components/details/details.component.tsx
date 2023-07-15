import { FC } from 'react';
import { BeerInfo } from '../../../dto/recipes';

interface DetailsProps {
  beer: BeerInfo | undefined;
}

export const Details: FC<DetailsProps> = ({beer}) => {
  return (
    <div className='w-1/3 text-center'>
      <div className="text-xl font-viga">ALL-GRAIN</div>
      <div className="mb-8">
        {beer?.ibu && <div><span className="font-viga text-right">IBU:&nbsp;</span>{beer?.ibu}</div>}
        {beer?.ebc && <div><span className="font-viga text-right">EBC:&nbsp;</span>{beer?.ebc}</div>}
        {beer?.srm && <div><span className="font-viga text-right">SRM:&nbsp;</span>{beer?.srm}</div>}
        {beer?.ph && <div><span className="font-viga text-right">PH:&nbsp;</span>{beer?.ph}</div>}
        {beer?.target_fg && <div><span className="font-viga text-right">Target FG:&nbsp;</span>{beer?.target_fg}</div>}
        {beer?.target_og && <div><span className="font-viga text-right">Target OG:&nbsp;</span>{beer?.target_og}</div>}
        {beer?.attenuation_level && <div><span className="font-viga text-right">Attenuation level:&nbsp;</span>{beer?.attenuation_level}</div>}
      </div>
      <div className="mb-8">
        {beer?.volume.value && <div><span className="font-viga text-right">Volume:&nbsp;</span>{beer?.volume.value} {beer?.volume.unit}</div>}
        {beer?.boil_volume.value && <div><span className="font-viga text-right">Boil volume:&nbsp;</span>{beer?.boil_volume.value} {beer?.boil_volume.unit}</div>}
      </div>

      <div className="text-xl font-viga">METHOD</div>
      {beer?.method.fermentation.temp.value && <div><span className="font-viga text-right">Fermentation:&nbsp;</span>{beer?.method.fermentation.temp.value} {beer?.method.fermentation.temp.unit}</div>}
    </div>
  );
}