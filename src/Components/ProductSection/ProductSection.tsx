import { storeData } from "../../assets/data/dataStore";
import { ProductSectionItem } from "./ProductItem/ProductItem";




export const ProductSection:React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-black via-transparent to-teal-200 py-10">
        <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
          <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
            SUMMER T-Shirt SALE 30%
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10 shadow-lg shadow-gray-500/50">
          {storeData.slice(0, 6).map((product, index) => {
            return (
              <div key={index}>
                <ProductSectionItem
                        id={product.id}
                        name={product.name}
                        img={product.img}
                        text={product.text}
                        price={product.price}
                        color={product.color}
                        size={product.size} totalPrice={""} />
              </div>
            );
          })}
        </div>
      </div>
    )
}