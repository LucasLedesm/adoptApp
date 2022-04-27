import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Icon icon="ic:baseline-pets" /> Mascotas
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" ><Link to={'/mascotas/'} className="nav-link" ><Icon icon="ic:baseline-pets" />Adoptar </Link></a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" ><Link to={"/publicar/"}><Icon icon="ic:baseline-pets" />Dar en adopcion</Link></a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav2"> <a className="nav-link" ><Icon icon="bx:donate-heart" />Ayudar </a> </li>
                            <li className="nav-item nav3"> <a className="nav-link" ><Icon icon="ic:baseline-event" />Evento </a> </li>
                            <li className="nav-item nav4"> <a className="nav-link" ><Icon icon="bi:person-circle" />Perfil </a> </li>
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