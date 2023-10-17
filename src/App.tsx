
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { SingleProduct } from './Components/SelectedProduct/ProductCart/SingleProduct/SingleProduct'
import { SelectedProduct } from './Components/SelectedProduct/SelectedProduct'




export default function App() {

 
  //const isAuth = useSelector((state: RootState) => state.authReducer.users.authUser)


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/selectedProducts/:type' element={<SelectedProduct />} />
          <Route path='/selectedProducts/:type/:id' element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

