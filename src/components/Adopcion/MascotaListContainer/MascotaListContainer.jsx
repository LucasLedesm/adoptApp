import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFireStore from '../../../hooks/useFireStore'
import Loader from '../../Loader/Loader'
import MascotaList from '../MascotaList/MascotaList'

const AdopcionContainer = () => {
    const {idCategory} = useParams()
    

    const {mascotas, load, getData, getDataCategory } = useFireStore()

    useEffect(() => {

        if(idCategory){
            getDataCategory(idCategory)
        }else{
            getData();
        }


        
    }, [idCategory]);
    return (
        <>
        <div className="row row-cols-lg-3 d-flex g-4 mt-4 my-4 pt-4">
           {load ? <Loader/> : <MascotaList mascotas={mascotas} />}
        </div>
    </>
    )
}

export default AdopcionContainer