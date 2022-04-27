import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MascotaListContainer from '../components/Adopcion/MascotaListContainer/MascotaListContainer';
import MascotaDetailContainer from '../components/Adopcion/MascotaDetailContainer/MascotaDetailContainer';
import Home from '../components/Home/Home';
const Rutas = () => {
    return (
      
             <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/mascotas/' element={<MascotaListContainer />} />
                    <Route path='/mascotas/:id' element={<MascotaDetailContainer />} />
                    <Route path="/mascotas/:idCategory" element={<MascotaListContainer />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
    
            )
}

export default Rutas