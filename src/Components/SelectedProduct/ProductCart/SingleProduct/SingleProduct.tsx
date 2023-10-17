import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../../reduxStore/addToBag/addSlice";
import { RootState } from "../../../../reduxStore/store";

export interface ProductType {
  id: string;
  img: string;
  name: string;
  text: string;
  type: string;
  size?: string[] ;
  color: Array<string>;
  gender: string;
  price: number;
}

export const SingleProduct: React.FC = () => {
  const product = useSelector((state: RootState) => state.filterReducer.selectedProduct);

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const { id } = useParams();

  const dispatch = useDispatch();

  const sizeSelectClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div className="p-5 sm:p-10 md:p-20 bg-gradient-to-br from-black via-transparent to-teal-200">
      {product
        .filter((el) => el.id === id)
        .map((el, index: number) => {
          return (
            <div key={index} className="flex flex-col sm:flex-row justify-center items-center py-5 sm:py-10 md:py-20">
              <div className="mb-5 sm:mr-5 sm:w-[50%]">
                <img className="h-[300px] sm:h-[450px] lg:h-[600px] rounded-lg" src={el.img} alt={el.name} />
              </div>
              <div className="sm:w-[50%]">
                <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">{el.name}</h5>
                <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">{el.text}</p>
                <div className="pb-4">
                  {el.size ? (
                    <div>
                      <label htmlFor="size" className="block mb-2 text-sm font-medium text-black italic">
                        Pick a size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className={sizeSelectClass}
                      >
                        {el.size.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Pick a size
                      </label>
                      <select
                        id="size"
                        disabled={true}
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className={sizeSelectClass}
                      >
                        {el.size?.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
                <div className="pb-4">
                  <label htmlFor="color" className="block mb-2 text-sm font-medium text-black italic">
                    Pick a color
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className={sizeSelectClass}
                  >
                    {el.color.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className="shadow-lg shadow-gray-500/50 p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        amount: 1,
                        totalPrice: el.price,
                        id: el.id,
                        price: el.price,
                        size: size,
                        color: color,
                        img: el.img,
                        name: el.name,
                        text: el.text,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
