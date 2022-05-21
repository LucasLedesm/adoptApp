import React, { useState } from 'react'
import useFireStore from '../../../hooks/useFireStore';

const FormMascota = () => {


    const [form, setForm] = useState({


    
            nombre: "",
            edad: "",
            color: "",
            idCategory: "",
            tamaño: "",
            urlFoto: "",
            enfermedad: "",
            vacunas: "",
            descripcion: "",
        
        
    })
    const { generateAdopc, idAdopc } = useFireStore();

    const handleChange = (e) => {
        setForm({
                ...form,
                [e.target.name]: e.target.value
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generateAdopc({ datos: form })
        
    }

    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
            <h3>Formulario para publicar mascota</h3>
            <div className="col-md-3">
                <label for="validationCustom01" className="form-label">Nombre</label>
                <input onChange={handleChange} name="nombre" value={form.nombre} type="text" className="form-control" id="validationCustom01" required></input>
                <div className="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom02" className="form-label">Edad</label>
                <input onChange={handleChange}name="edad" value={form.edad} type="number" className="form-control" id="validationCustom02" required></input>
                <div className="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom03" className="form-label">color</label>
                <input onChange={handleChange}name="color" value={form.color} type="text" className="form-control" id="validationCustom03" required></input>
                <div className="invalid-feedback">
                    Atencion!
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Mascota</label>
                <select onChange={handleChange}name="idCategory" value={form.idCategory} className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Tu mascota es..</option>
                    <option>Gata/o</option>
                    <option>Perra/o</option>
                    <option>Otro</option>
                </select>
                <div className="invalid-feedback">
                    Selecciona algun tipo.
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Tamaño</label>
                <select onChange={handleChange}name="tamaño" value={form.tamaño} className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Tu mascota es..</option>
                    <option>Pequeña/o</option>
                    <option>Mediana/o</option>
                    <option>Grande</option>
                </select>
                <div className="invalid-feedback">
                    Selecciona algun tipo.
                </div>
            </div>
            <div className="col-md-6">
                <label for="basic-url" className="form-label">Url de foto</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://instagram.com/user/photo3</span>
                <input onChange={handleChange}name="urlFoto" value={form.urlFoto} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
            </div>
            
            <div className="form-check form-switch">
                <input onChange={handleChange}name="vacunas" value={form.vacunas} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" for="flexSwitchCheckDefault">Esta Vacunada/o.</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={handleChange}name="enfermedad" value={form.enfermedad} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" for="flexSwitchCheckDefault">Esta Enferma/o.</label>
            </div>
            <div className="col-md-12">
                    <label for="validationCustom05" className="form-label">Descripcion</label>
                    <textarea onChange={handleChange}name="descripcion" value={form.descripcion} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button disabled={!form.nombre || !form.color || !form.urlFoto}  onClick={ generateAdopc()} className="btn btn-primary" type="submit">Publicar</button>
            </div>
        </form>
    )
}

export default FormMascota