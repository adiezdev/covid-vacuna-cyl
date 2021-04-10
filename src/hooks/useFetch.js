import { useEffect, useRef, useState } from "react"
import { getVacunasCyL } from "../helpers/getVacunasCyL"



export const useFetch = ( rows , datset ) =>{

    const isMounted = useRef(true)
    
    const [isLogin] = useState(true)

    const [state, setState] = useState({ data: null , error: null , isLogin })


    useEffect(() => {
        getVacunasCyL( rows , datset)
        .then(
            data =>{
                isMounted.current
                ?
                    setState({
                        data: data,
                        error: null,
                        isLogin: false
                    })
                :
                    setState({
                        data: null,
                        error: 'Error al cargar',
                        isLogin: true
                    })
            }
        )
    }, [rows ,  datset])

    return state;
}