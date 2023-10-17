import { useDispatch } from "react-redux"
import { addToCart } from "../../../reduxStore/addToBag/addSlice";



interface Product {
    id: string,
    img: string,
    name: string,
    text: string,
    price: number,
    color: string[],
    size:string[] | undefined,
    totalPrice: string
}

export const ProductSectionItem: React.FC<Product> = ({ id, img, name, text, size, price, color }) => {


    const dispatch = useDispatch();


    const defaultSize = size?.[0]
    const defaultColor = color[0]


    return (
        <div>
            <div className="flex flex-col items-center border-solid border-2 border-gray-200 rounded-md p-5 gap-5">
                <div>
                    <img
                        className="w-[15rem] h-[20rem] rounded-md shadow-lg shadow-gray-500/50 hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
                        src={img}
                        alt={name}
                    />
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="font-bold text-xl">{name}</div>
                    <div className="italic">{text}</div>
                    <div className="flex justify-between w-full border-t-4 pt-5">
                        <span className="">Price: {price} $</span>
                        <span>Size: {defaultSize}</span>
                        <button className="shadow-lg shadow-gray-500/50 p-5 rounded-xl hover:scale-105 hover:shadow-cyan-500/50 ease-in-out duration-500"
                                        onClick={() => dispatch(addToCart({
                                            amount: 1,
                                            totalPrice: price,
                                            id: id,
                                            price: price,
                                            size: defaultSize,
                                            color: defaultColor,
                                            img: img,
                                            name: name,
                                            text: text
                                        }))}
                                    >Add to card</button>
                    </div>
                </div>
            </div>
        </div>

    )
}