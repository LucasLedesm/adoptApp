import React from 'react'
import { Link } from 'react-router-dom';


const Mascota = (props) => {
    

    return (
        <>
                    <Link to={`/mascotas/${props.id}`}>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.fotoUrl} className="img-fluid rounded-start" alt="foto Mascota"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre}</h5>
                            <p className="card-text">{props.descripcion}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
                    </Link>
        </>
        // <div classNameName="container d-flex">
        //     <div classNameName="col-md-10 w-100">
        //         <div classNameName="card shadow-sm text-white bg-dark border-info align-items-center">
        //             <h1>{props.nombre}</h1>
        //             <img src={props.fotoUrl} alt="ilustracion" style={{ width: '100px', height: '100px' }} />
        //             <div classNameName="card-body">
        //                 <h3>${props.peso}</h3>
        //                 <h2>${props.edad}</h2>
        //                 <p style={{height: '100px' }} classNameName="card-text text-white"><strong>Equipable para:</strong>  {props.description}</p>
        //                 <div classNameName="d-flex justify-content-center align-items-center">
        //                     <div classNameName="btn-group">
        //                         <Link to={`/item/${props.id}`} classNameName='btn btn-light'>Ver Detalles</Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Mascota