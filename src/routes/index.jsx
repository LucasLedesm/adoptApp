import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Perros from '../components/Adopcion/Perros/Perros'
import Adopcion from '../components/Adopcion/Adopcion';

const Rutas = () => {
    return (
      
             <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/adopcion/' element={<Adopcion />} />
                    <Route path='/adopcion/perros' element={<Perros />} />
                    {/* <Route path='/adopcion/gatos' element={<Gatos />} /> */}
                    {/* <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/Category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} /> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
    
            )
}

export default Rutas