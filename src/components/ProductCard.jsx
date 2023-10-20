import { star } from '../assets/icons';

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full hover:scale-110 duration-300 ease-in-out rounded-lg p-4 shadow-lg dark:bg-slate-800">
      <img src={imgURL} alt={`${name}-product`} height={282} className="rounded-lg text-center" />

      <div className="mt-4 flex items-center">
        <img src={star} alt="rating" height={24} width={24} className="mr-2" />
        <p className="font-montserrat sm:text-lg leading-normal text-slate-gray dark:text-gray-300">4.5</p>
      </div>

      <h3 className="mt-2 text-xl sm:text-2xl leading-normal font-semibold font-palanquin">{name}</h3>

      <p className="mt-2 sm:text-xl leading-normal font-semibold font-montserrat text-coral-red">{price}</p>
    </div>
  );
};

export default ProductCard;
