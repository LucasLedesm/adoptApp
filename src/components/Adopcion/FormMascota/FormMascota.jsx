import React from 'react'

const FormMascota = () => {
    return (
        <form class="row g-3 needs-validation" novalidate>
            <h3>Formulario para publicar mascota</h3>
            <div class="col-md-3">
                <label for="validationCustom01" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="validationCustom01" required></input>
                <div class="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom02" class="form-label">Edad</label>
                <input type="number" class="form-control" id="validationCustom02" required></input>
                <div class="valid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom03" class="form-label">Localizacion</label>
                <input type="text" class="form-control" id="validationCustom03" required></input>
                <div class="invalid-feedback">
                    Atencion!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Mascota</label>
                <select class="form-select" id="validationCustom04" required>
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
                <select class="form-select" id="validationCustom04" required>
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
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
            </div>
            
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label class="form-check-label" for="flexSwitchCheckDefault">Esta Vacunada/o.</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label class="form-check-label" for="flexSwitchCheckDefault">Esta Enferma/o.</label>
            </div>
            <div class="col-md-12">
                    <label for="validationCustom05" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                <button class="btn btn-primary" type="submit">Publicar</button>
            </div>
        </form>
    )
}

export default FormMascota