import { Link, useParams } from "react-router-dom";

type ProductCartProps = {
    id:string;
    img: string;
    name: string;
    text: string;
    price: number;
    color: string[];
  };
  
  export const ProductCart: React.FC<ProductCartProps> = ({id, img, name, text, price, color }) => {

    const {type} = useParams()

    


    return (
        <Link to={`/selectedProducts/${type}/`+ id}>
         
      <div className="flex flex-col border-solid border-2 border-gray-200 rounded-md p-5 gap-5">
        <div>
          <img
            className="w-[60rem] h-[20rem] rounded-md shadow-lg shadow-gray-500/50 hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
            src={img}
            alt={name}
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="font-bold text-xl">{name}</div>
          <div className="italic">{text}</div>
          <div className="flex justify-between w-full border-t-4 pt-5">
            <span className="">{price} $</span>
            <div className="flex gap-2">
              {color?.map((color, index) => (
                <div key={index}>
                  <span
                    className="rounded-full inline-block w-4 h-4"
                    style={{ backgroundColor: color }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  };
  