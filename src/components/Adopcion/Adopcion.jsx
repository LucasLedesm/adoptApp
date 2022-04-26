import React from 'react'
import { Link } from 'react-router-dom'

const Adopcion = () => {
    return (
        <>
            <div classNameName="container-fluid">
                <div classNameName="row row-cols-2 justify-content-center">
                    <div classNameName="col-md-4 ">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to={"/adopcion/perros"} >
                                <img src="https://cdn-icons-png.flaticon.com/512/1254/1254851.png?w=740 " className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div classNameName="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to={"/adopcion/gatos"} >
                                <img src="https://cdn-icons-png.flaticon.com/512/1254/1254846.png?w=740" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Adopcion