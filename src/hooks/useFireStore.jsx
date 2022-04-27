import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { useState } from 'react'
import db from '../service/firebase';

const useFireStore = () => {


    const [mascotas, setMascotas] = useState ([])

    const [load, setLoad] = useState(false)

    const [individual, setIndividual] = useState({})



    const getData = async () => {
        setLoad(true)
        try {
            const data = collection(db, "mascotas")
            const col = await getDocs(data)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setMascotas(result)
            setLoad(false)
        } catch (error) {
            console.log(error);
            setLoad(false)
        }
    };

    const getIndividualData = async ({id}) => {
        setLoad(true)

        try {
            const document = doc(db, "mascotas" ,  id);
            const response = await getDoc(document)
            const resultado = {id:response.id,...response.data()}

            setIndividual(resultado)
            setLoad(false)
          
        } catch (error) {
            console.log(error);
            setLoad(false)
        }
    }


    const getDataCategory = async (idCategory) => {

        setLoad(true)
        
        try {
        
        const data = collection(db, "mascotas")
        
        const col = await getDocs(data)
        
        const resultaux = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        
        const result = resultaux.filter((item) => item.idCategory===idCategory)
        
        setMascotas(result)
        
        setLoad(false)
        
        } catch (error) {
        
        console.log(error);
        
        setLoad(false)
        
        }
        
        };

       
        

    return {
        getIndividualData,
        getData,
        getDataCategory,
        mascotas,
        load,
        individual
    }

}

export default useFireStore