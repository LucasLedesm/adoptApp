import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFireStore from '../../../hooks/useFireStore';
import Loader from '../../Loader/Loader';
import MascotaDetail from '../MascotaDetail/MascotaDetail';


const MascotaDetailContainer =()=>{

    const {id} = useParams();
    const {individual, load, getIndividualData} = useFireStore();

    useEffect(() => {
        getIndividualData({id})
    
      return () => {
        
      }
    }, [])
    
       
        return <>
         {load ? <Loader/> : <MascotaDetail mascota={individual}/>}
        </>;
    }
export default MascotaDetailContainer;