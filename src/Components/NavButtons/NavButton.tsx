import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filteredAction } from '../../reduxStore/filterSlice/filterSlice';
import { baseURL } from '../../router';

export const NavButton: React.FC = () => {
  const navButt = [
    'Hoodies',
    'Dresses',
    'Suits',
    'Shoes',
    'T-Shirts',
    'Jeans',
    'Jackets',
    'Bags',
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-6 bg-black flex-wrap">
        {navButt.map((el, index) => (
          <Link to={`${baseURL}/selectedProducts/${el}`} key={index}>
            <button
              className="bg-white hover:bg-gray-600 hover:text-white duration-300 ease-in-out text-black font-bold py-2 px-4 rounded mr-2 md:mr-10 mb-2 md:mb-0 md:w-auto"
              onClick={() => dispatch(filteredAction.filterProducts(el))}
            >
              {el}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
