import React, { useState } from 'react'
import useFireStore from '../../../hooks/useFireStore';

const FormMascota = () => {


    const [form, setForm] = useState({


    
            nombre: "",
            edad: "",
            color: "",
            idCategory: "",
            tamaño: "",
            fotoUrl: "",
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
        <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
            <h3>Formulario para publicar mascota</h3>
            <div class="col-md-3">
                <label for="validationCustom01" class="form-label">Nombre</label>
                <input onChange={handleChange} name="nombre" value={form.nombre} type="text" class="form-control" id="validationCustom01" required></input>
                <div class="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom02" class="form-label">Edad</label>
                <input onChange={handleChange}name="edad" value={form.edad} type="number" class="form-control" id="validationCustom02" required></input>
                <div class="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom03" class="form-label">color</label>
                <input onChange={handleChange}name="color" value={form.color} type="text" class="form-control" id="validationCustom03" required></input>
                <div class="invalid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Mascota</label>
                <select onChange={handleChange}name="idCategory" value={form.idCategory} class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Tu mascota es..</option>
                    <option>Gata/o</option>
                    <option>Perra/o</option>
                    <option>Otro</option>
                </select>
                <div class="invalid-feedback">
                    Selecciona algun tipo.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Tamaño</label>
                <select onChange={handleChange}name="tamaño" value={form.tamaño} class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Tu mascota es..</option>
                    <option>Pequeña/o</option>
                    <option>Mediana/o</option>
                    <option>Grande</option>
                </select>
                <div class="invalid-feedback">
                    Selecciona algun tipo.
                </div>
            </div>
            <div class="col-md-6">
                <label for="basic-url" class="form-label">Url de foto</label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://instagram.com/user/photo3</span>
                <input onChange={handleChange}name="urlFoto" value={form.fotoUrl} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
            </div>
            
            <div class="form-check form-switch">
                <input onChange={handleChange}name="vacunas" value={form.vacunas} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label class="form-check-label" for="flexSwitchCheckDefault">Esta Vacunada/o.</label>
            </div>
            <div class="form-check form-switch">
                <input onChange={handleChange}name="enfermedad" value={form.enfermedad} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label class="form-check-label" for="flexSwitchCheckDefault">Esta Enferma/o.</label>
            </div>
            <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">Descripcion</label>
                    <textarea onChange={handleChange}name="descripcion" value={form.descripcion} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button disabled={!form.nombre || !form.color || !form.urlFoto}  onClick={ generateAdopc()} class="btn btn-primary" type="submit">Publicar</button>
            </div>
        </form>
    )
}

export default FormMascota