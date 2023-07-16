import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecipeStore } from '../../../modules/recipes/store/recipes';
import { BeerInfo } from '../../../modules/dto/recipes';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteBeers = useRecipeStore((state) => state.deleteBeers);
  
  const filteredIds = recipes
  .filter((beer: BeerInfo) => beer.isChecked)
  .map((beer: BeerInfo) => beer.id);

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteBeers(filteredIds);
  }
  
  return (
    <div className="z-10 bg-white flex justify-center fixed w-full">
      <div className="w-3/4 flex justify-between">
        <Link to='/'>
          <svg className='my-6 w-64' viewBox="0 0 287 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.00684 24.8501H34.0068V61.2361H4.00684V24.8501Z" fill="#FCEA2B"/>
            <path d="M25.5328 24.8501L18.0068 61.2361H34.0068V24.8501H25.5328Z" fill="#F1B31C"/>
            <path d="M29.1997 17.02C27.9355 17.0228 26.7122 17.4679 25.7417 18.278C24.8037 16.34 22.9077 15.011 20.7157 15.009C19.9157 15.009 19.1557 15.187 18.4647 15.505C17.3447 13.984 15.6047 13.002 13.6447 13C10.6987 12.998 8.2397 15.205 7.6487 18.15C7.29642 18.0571 6.93401 18.008 6.5697 18.004C3.9667 18.002 1.8537 20.244 1.8517 23.01L1.8457 31.025C1.8447 32.128 2.6927 33.03 3.7297 33.031H4.6727C5.7097 33.032 6.5587 32.131 6.5597 31.029L6.5607 29.429C7.13825 29.815 7.81609 30.0235 8.5107 30.029L10.3647 30.03C11.5677 30.031 12.6307 29.416 13.3237 28.478C14.3487 30.021 16.0357 31.037 17.9387 31.038C21.0497 31.041 23.5987 28.338 23.6007 25.031L34.5217 25.04C34.7317 24.413 34.8517 23.74 34.8517 23.036C34.8557 19.716 32.3247 17.022 29.1997 17.02Z" fill="white"/>
            <path d="M4.814 26.428C4.816 23.739 6.929 21.561 9.532 21.563C9.904 21.563 10.262 21.619 10.611 21.703C11.201 18.843 13.661 16.698 16.608 16.7C18.567 16.702 20.307 17.656 21.426 19.134C22.1341 18.816 22.9017 18.652 23.678 18.653C25.87 18.655 27.766 19.946 28.703 21.829C29.6826 21.0386 30.9033 20.6074 32.162 20.607C32.692 20.607 33.202 20.688 33.688 20.829C32.919 18.549 30.825 16.909 28.354 16.906C27.0956 16.9066 25.8753 17.3378 24.896 18.128C23.958 16.246 22.062 14.954 19.87 14.953C19.07 14.952 18.31 15.125 17.619 15.433C16.499 13.956 14.759 13.001 12.799 13C9.853 12.998 7.393 15.143 6.803 18.004C6.45029 17.9139 6.08802 17.8666 5.724 17.863C3.121 17.861 1.008 20.039 1.006 22.727L1 30.517C0.999001 31.587 1.847 32.464 2.884 32.465H3.827C4.187 32.466 4.522 32.355 4.809 32.172L4.814 26.428Z" fill="white"/>
            <path d="M34.5068 52.1201H40.5068C42.7068 52.1201 44.5068 50.3201 44.5068 48.1201V34.1201C44.5068 31.9201 42.7068 30.1201 40.5068 30.1201H34.5068" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.6008 24.8501H34.0068V61.6201H5.00684V41.2551" stroke="black" strokeWidth="2.018" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.2587 32.932C6.0117 32.67 6.5587 31.914 6.5597 31.029L6.5607 29.43C7.13836 29.8156 7.81619 30.0238 8.5107 30.029L10.3647 30.03C11.5677 30.031 12.6307 29.416 13.3237 28.478C14.3487 30.021 16.0357 31.037 17.9387 31.038C21.0497 31.041 23.5987 28.338 23.6007 25.031L34.5217 25.04C34.7317 24.413 34.8517 23.74 34.8517 23.036C34.8547 19.716 32.3247 17.022 29.1997 17.02C27.9355 17.0228 26.7122 17.4679 25.7417 18.278C24.8037 16.34 22.9077 15.011 20.7157 15.01C19.9157 15.009 19.1557 15.187 18.4647 15.505C17.3447 13.984 15.6047 13.002 13.6447 13C10.6987 12.998 8.2397 15.205 7.6487 18.15C7.29642 18.0571 6.93401 18.008 6.5697 18.004C3.9667 18.002 1.8537 20.244 1.8517 23.01L1.8457 31.026C1.8447 32.128 2.6927 33.03 3.7297 33.031H4.6727C4.8767 33.031 5.0727 32.997 5.2577 32.932" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M79.056 42.72H60.408C60.408 45.632 60.856 47.76 61.752 49.104C62.6853 50.448 64.5333 51.12 67.296 51.12C69.088 51.12 70.4133 50.56 71.272 49.44C72.1307 48.2827 72.56 47.1813 72.56 46.136H79.112C79.112 50.1307 78.0293 53.0613 75.864 54.928C73.736 56.7947 70.8987 57.728 67.352 57.728C63.8427 57.728 61.1173 57.224 59.176 56.216C55.1813 54.1627 53.184 48.712 53.184 39.864C53.184 34.6 54.3227 30.7547 56.6 28.328C58.8773 25.864 62.3493 24.632 67.016 24.632C75.1173 24.632 79.168 29.1307 79.168 38.128C79.168 39.0987 79.1307 40.6293 79.056 42.72ZM60.576 37.736H72.56C72.56 35.272 72.0933 33.48 71.16 32.36C70.2267 31.24 68.7893 30.68 66.848 30.68C64.944 30.68 63.4133 31.2587 62.256 32.416C61.136 33.536 60.576 35.3093 60.576 37.736ZM109.736 42.72H91.0877C91.0877 45.632 91.5357 47.76 92.4317 49.104C93.365 50.448 95.213 51.12 97.9757 51.12C99.7677 51.12 101.093 50.56 101.952 49.44C102.81 48.2827 103.24 47.1813 103.24 46.136H109.792C109.792 50.1307 108.709 53.0613 106.544 54.928C104.416 56.7947 101.578 57.728 98.0317 57.728C94.5224 57.728 91.797 57.224 89.8557 56.216C85.861 54.1627 83.8637 48.712 83.8637 39.864C83.8637 34.6 85.0024 30.7547 87.2797 28.328C89.557 25.864 93.029 24.632 97.6957 24.632C105.797 24.632 109.848 29.1307 109.848 38.128C109.848 39.0987 109.81 40.6293 109.736 42.72ZM91.2557 37.736H103.24C103.24 35.272 102.773 33.48 101.84 32.36C100.906 31.24 99.469 30.68 97.5277 30.68C95.6237 30.68 94.093 31.2587 92.9357 32.416C91.8157 33.536 91.2557 35.3093 91.2557 37.736ZM147.191 57H138.175L130.391 42.216H124.791V57H117.007V25.696C117.007 22.7093 117.698 20.544 119.079 19.2C120.461 17.8187 122.775 17.128 126.023 17.128H132.631C136.589 17.128 139.725 18.3413 142.039 20.768C144.391 23.1573 145.567 26.2 145.567 29.896C145.567 32.584 144.858 34.9173 143.439 36.896C142.058 38.8373 140.341 40.1813 138.287 40.928L147.191 57ZM132.127 35.72C133.77 35.72 135.114 35.16 136.159 34.04C137.242 32.8827 137.783 31.464 137.783 29.784C137.783 28.0667 137.261 26.6853 136.215 25.64C135.207 24.5947 133.845 24.072 132.127 24.072H128.263C125.949 24.072 124.791 25.248 124.791 27.6V35.72H132.127ZM177.056 42.72H158.408C158.408 45.632 158.856 47.76 159.752 49.104C160.685 50.448 162.533 51.12 165.296 51.12C167.088 51.12 168.413 50.56 169.272 49.44C170.131 48.2827 170.56 47.1813 170.56 46.136H177.112C177.112 50.1307 176.029 53.0613 173.864 54.928C171.736 56.7947 168.899 57.728 165.352 57.728C161.843 57.728 159.117 57.224 157.176 56.216C153.181 54.1627 151.184 48.712 151.184 39.864C151.184 34.6 152.323 30.7547 154.6 28.328C156.877 25.864 160.349 24.632 165.016 24.632C173.117 24.632 177.168 29.1307 177.168 38.128C177.168 39.0987 177.131 40.6293 177.056 42.72ZM158.576 37.736H170.56C170.56 35.272 170.093 33.48 169.16 32.36C168.227 31.24 166.789 30.68 164.848 30.68C162.944 30.68 161.413 31.2587 160.256 32.416C159.136 33.536 158.576 35.3093 158.576 37.736ZM200.12 45.296L206.728 45.24C206.69 45.5387 206.653 46.08 206.616 46.864C206.578 47.648 206.541 48.1893 206.504 48.488C206.504 48.7493 206.466 49.1787 206.392 49.776C206.317 50.3733 206.224 50.8213 206.112 51.12C206.037 51.3813 205.925 51.736 205.776 52.184C205.104 54.1253 203.274 55.656 200.288 56.776C198.384 57.448 196.386 57.784 194.296 57.784C192.242 57.784 190.376 57.448 188.696 56.776C187.016 56.104 185.69 55.2453 184.72 54.2C182.517 51.8853 181.416 47.5547 181.416 41.208C181.416 34.824 182.517 30.4747 184.72 28.16C185.69 27.1147 187.016 26.256 188.696 25.584C190.376 24.912 192.242 24.576 194.296 24.576C198.328 24.576 201.389 25.584 203.48 27.6C205.57 29.616 206.616 32.416 206.616 36H200.008C200.008 34.3573 199.597 33.144 198.776 32.36C197.954 31.5387 196.424 31.128 194.184 31.128C191.981 31.128 190.506 31.8187 189.76 33.2C189.05 34.5813 188.696 36.6533 188.696 39.416V42.328C188.696 46.7707 189.554 49.496 191.272 50.504C192.056 50.9893 193.082 51.232 194.352 51.232C195.621 51.232 196.648 51.12 197.432 50.896C198.253 50.6347 198.832 50.2053 199.168 49.608C199.541 49.0107 199.784 48.432 199.896 47.872C200.008 47.2747 200.082 46.416 200.12 45.296ZM216.503 12.816C218.257 12.816 219.396 13.096 219.919 13.656C220.441 14.1787 220.703 15.3173 220.703 17.072C220.703 18.7893 220.423 19.928 219.863 20.488C219.34 21.0107 218.201 21.272 216.447 21.272C214.729 21.272 213.591 20.992 213.031 20.432C212.508 19.872 212.247 18.7333 212.247 17.016C212.247 15.2987 212.508 14.1787 213.031 13.656C213.591 13.096 214.748 12.816 216.503 12.816ZM220.087 57H212.807V26.2H220.087V57ZM253.765 40.144C253.765 48.4693 251.618 53.7893 247.325 56.104C245.57 57.0373 243.423 57.504 240.885 57.504L235.509 54.032V66.52H228.229V25.248H242.565C246.895 25.248 249.845 26.48 251.413 28.944C252.981 31.3707 253.765 35.104 253.765 40.144ZM246.485 41.264C246.485 34.9547 244.469 31.8 240.437 31.8H235.509V46.64L240.437 49.832C242.602 49.832 244.151 49.16 245.085 47.816C246.018 46.4347 246.485 44.2507 246.485 41.264ZM283.533 42.72H264.885C264.885 45.632 265.333 47.76 266.229 49.104C267.162 50.448 269.01 51.12 271.773 51.12C273.565 51.12 274.89 50.56 275.749 49.44C276.607 48.2827 277.037 47.1813 277.037 46.136H283.589C283.589 50.1307 282.506 53.0613 280.341 54.928C278.213 56.7947 275.375 57.728 271.829 57.728C268.319 57.728 265.594 57.224 263.653 56.216C259.658 54.1627 257.661 48.712 257.661 39.864C257.661 34.6 258.799 30.7547 261.077 28.328C263.354 25.864 266.826 24.632 271.493 24.632C279.594 24.632 283.645 29.1307 283.645 38.128C283.645 39.0987 283.607 40.6293 283.533 42.72ZM265.053 37.736H277.037C277.037 35.272 276.57 33.48 275.637 32.36C274.703 31.24 273.266 30.68 271.325 30.68C269.421 30.68 267.89 31.2587 266.733 32.416C265.613 33.536 265.053 35.3093 265.053 37.736Z" fill="black"/>
          </svg>
        </Link>
        {(filteredIds.length === 0 || pathname !== '/')||
        <button onClick={handleDelete}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 my-8 border border-blue-700 rounded">
            Delete
        </button>}
          
      </div>
    </div>
      
  );
}