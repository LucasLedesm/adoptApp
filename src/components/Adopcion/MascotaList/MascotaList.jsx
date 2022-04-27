import React from 'react'
import Loader from '../../Loader/Loader'
import Mascota from '../Mascota/Mascota'

const MascotaList  = ({ mascotas }) => {
  return (
    <>
            {
                mascotas.length > 0
                    ? mascotas.map(mascota =>
                        <Mascota
                            key={mascota.id}
                            id={mascota.id}
                            name={mascota.nombre}
                            description={mascota.descripcion}
                            idCategory={mascota.idCategory}
                            pictureUrl={mascota.imagen}
                            edad={mascota.edad}
                            peso={mascota.peso} />)
                    : <p><Loader   /></p>
            }
        </>
  )
}

export default MascotaList