import { FC, useEffect, useState } from 'react';
import { Container } from '../../../common/components';
import { useRecipeStore } from '../store/recipes';
import { BeerCard } from '../index';

interface RecipesPageProps {}

export const RecipesPage: FC<RecipesPageProps> = () => {
  const pagination = useRecipeStore((state) => state.pagination);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
  const [amountMin, setAmountMin] = useState<number>(0);
  const [amountMax, setAmountMax] = useState<number>(15);
  
  useEffect(() => {
    if(fetching){
      fetchRecipes(currentPage, setFetching, setCurrentPage, amountMin, amountMax);/*видалення не з pagination, a recipes*/
      window.scrollTo({
        top: document.documentElement.scrollTop = 0,
        behavior: 'smooth',
      });
    }
  }, [fetchRecipes, currentPage, fetching, amountMin, amountMax]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    setFetching(false)
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition + windowHeight >= documentHeight) {
      setFetching(true);
      setAmountMin((amount:number) => amount + 15);
      setAmountMax((amount:number) => amount + 15);
    }
  }

  return (
    <Container>
      <div className="relative top-32 pb-24">
      {pagination.map((beer) => (
        <BeerCard
          key={beer.id}
          id={beer.id}
          image_url={beer.image_url}
          name={beer.name}
          firstBrewed={beer.first_brewed}
          tagline={beer.tagline}
          description={beer.description}
          checked={beer.isChecked}
        />
      ))}
      </div>
    </Container>
  );
}