import { Routes, Route } from "react-router-dom"
import { Main } from "../Components/Main/Main"
import { SingleProduct } from "../Components/SelectedProduct/ProductCart/SingleProduct/SingleProduct"
import { SelectedProduct } from "../Components/SelectedProduct/SelectedProduct"
import { baseURL } from "../router"



export const MainPage:React.FC = () => {
    return (
        <Routes>
        <Route path={`${baseURL}`} element={<Main />} />
        <Route path={`${baseURL}/selectedProducts/:type`} element={<SelectedProduct />} />
        <Route path={`${baseURL}/selectedProducts/:type/:id`} element={<SingleProduct />} />
      </Routes>
    )
}