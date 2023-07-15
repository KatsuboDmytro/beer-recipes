import { FC } from 'react';

interface DividingLineProps {
  direction: string;
}

export const DividingLine: FC<DividingLineProps> = ({ direction }) => {
  const lineClasses = `bg-amber-400 mx-8 ${direction === 'horizontal' ? 'w-28 h-1' : 'w-1 h-28'}`;

  return <div style={direction === 'horizontal' ? { margin: '0 auto' } : undefined} className={lineClasses}></div>;
};
