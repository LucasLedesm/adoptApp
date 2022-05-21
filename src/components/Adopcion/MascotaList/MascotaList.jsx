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
                            color={mascota.color}
                            enfermedad={mascota.enfermedad}
                            tamaño={mascota.tamaño}
                            nombre={mascota.nombre}
                            descripcion={mascota.descripcion}
                            idCategory={mascota.idCategory}
                            urlFoto={mascota.urlFoto}
                            edad={mascota.edad}
                            peso={mascota.peso} />)
                    : <p><Loader   /></p>
            }
        </>

  )
}

export default MascotaList