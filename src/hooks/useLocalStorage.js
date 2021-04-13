import { useEffect, useState } from "react"



export const useLocalStorage = (key, initialValue)=>{

    
    const [storagevalues, setStorage] = useState(()=>{//Cuando llega las vairables incializadas se dispara
        try{
            //Coge el tema que hay
            const item = localStorage.getItem(key)
            //Comporbamos que el local storage esté inicializado,sino es asi devuelve su
            return item !== null ? item : initialValue;
        }catch(error){
            return initialValue
        }
    })
    //Lanzamos el efecto para que se guarde en local storage
    useEffect(() => {
            localStorage.setItem(key , storagevalues)
    }, [key , storagevalues])

    return[ storagevalues, setStorage]
}