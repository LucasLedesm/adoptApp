import { Link } from 'react-router-dom';



const MascotaDetail = ({ mascota }) => {

    let enfermedad = mascota.enfermedad;
    enfermedad === 'true' ? enfermedad = 'Si' : enfermedad = 'No'


    return (
        <>
            <div className="container d-flex pt-4 mt-4">
                <div className="col-md-10">
                    <div className="card shadow-sm text-white bg-dark border-info align-items-center">
                        <div className=' col-md-10 d-flex justify-content-start pt-4'>
                        </div>
                        <h1>{mascota.nombre}</h1>
                        <img src={mascota.fotoUrl} alt="ilustracion" style={{ width: '400px', height: ' 400px' }} />
                        <div className="card-body">
                            <h3>{mascota.precio}</h3>
                            <p style={{ height: '100px' }} className="card-text"><strong>Descripcion:</strong>  {mascota.descripcion}</p>
                            <p  className="card-text"><strong>enfermerdades:</strong>  {enfermedad}</p>
                            <p  className="card-text"><strong>peso:</strong>  {mascota.peso}kg</p>
                            <p  className="card-text"><strong>edad:</strong>  {mascota.edad}años</p>
                            <div className="d-flex justify-content-center align-items-center">
                            </div>
                        </div>
                    </div>
                    <div d-flex justify-content-end>
                            <Link to="/"><button className="btn btn-warning" type="button">Volver</button></Link>
                            <button className="btn btn-warning" type="button">Contactar</button>

                    </div>
                </div>
            </div>
        </>

    );
}

export default MascotaDetail