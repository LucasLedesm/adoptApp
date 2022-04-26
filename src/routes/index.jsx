import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Rutas = () => {
    return (
      
             <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    {/* <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/Category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} /> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
    
            )
}

export default Rutas