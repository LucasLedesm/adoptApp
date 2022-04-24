import React from 'react'
import { Icon } from '@iconify/react';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#">Adoptapp!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ulNavItem  me-auto mb-2 mb-lg-0">
                            <li className="nav-item nav1"> <a className="nav-link" href="#"><Icon icon="ic:baseline-pets" />adopcion </a> </li>
                            <li className="nav-item nav2"> <a className="nav-link" href="#"><Icon icon="bx:donate-heart" />Ayudar </a> </li>
                            <li className="nav-item nav3"> <a className="nav-link" href="#"><Icon icon="ic:baseline-event" />Evento </a> </li>
                            <li className="nav-item nav4"> <a className="nav-link" href="#"><Icon icon="bi:person-circle" />Perfil </a> </li>
                        </ul>
                       
                            <button className="btn btn-outline-success me-2" type="button">Login</button>
                            <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar