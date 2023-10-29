import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filteredAction } from "../../reduxStore/filterSlice/filterSlice";
import { RootState } from "../../reduxStore/store";
import { ProductCart } from "./ProductCart/ProductCart";

interface ProductCart {
  id: string;
  img: string;
  name: string;
  text: string;
  price: number;
  color: string[];
}

export const SelectedProduct: React.FC = () => {
  const products = useSelector((state: RootState) => state.filterReducer.filterProducts);
  const error = useSelector((state: RootState) => state.filterReducer.error)
  const { type } = useParams();
  const dispatch = useDispatch()



  const genderButtons = ["male", "female"];


  const sizeButtons = ["S", "M", "L", "XL"];


  const handleSizeClick = (size: string) => {
    dispatch(filteredAction.filterBySize({ size }));
  };




  return (
    <div className="p-10 bg-gradient-to-br from-black via-transparent  to-teal-200">
      
      <div className="flex flex-col md:flex-row pl-5 gap-5">
        {genderButtons.map((el, index) => (
          <div key={index}>
            <button
              className="w-[100%] shadow-lg shadow-gray-500/50 p-3 md:p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
              onClick={() => {
                dispatch(filteredAction.filterGender({ gender: el }));
              }}
            >
              {el}
            </button>
          </div>
        ))}
        <button
          className="shadow-lg shadow-gray-500/50 p-3 md:p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
          onClick={() => {
            dispatch(filteredAction.sortByPrice());
          }}
        >
          Price
        </button>
        <button
          color="gray"
          className="shadow-lg shadow-gray-500/50 p-3 md:p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
          onClick={() => dispatch(filteredAction.filterProducts(type))}
        >
          Clear Filter
        </button>
        <div className="shadow-lg shadow-gray-500/50 p-3 md:p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500">
          <select
            className="rounded-md shadow-lg bg-white ring-black ring-opacity-5 w-full md:w-56"
            disabled={type === 'Bags' || type === 'Shoes'}
            onChange={(e) => handleSizeClick(e.currentTarget.value)}
          >
            {sizeButtons.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? <div className="flex justify-items-center items-center p-10 text-4xl">List is empy</div> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 shadow-lg shadow-gray-500/50">
          {products
            .filter((el: { type: string }) => el.type === type)
            .map((el: ProductCart, index: number) => {
              return (
                <div key={index} className="shadow-lg shadow-gray-500/50 rounded">
                  <ProductCart img={el.img} name={el.name} text={el.text} price={el.price} color={el.color} id={el.id} />
                </div>
              );
            })}
        </div>}

    </div>
  );
};
