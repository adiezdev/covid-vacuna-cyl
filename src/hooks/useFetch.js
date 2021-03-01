import { useEffect, useRef, useState } from "react"



export const useFetch = ( url ) =>{

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null , error: null })

    useEffect(() => {
        return () =>{
            isMounted.current = false;
        }        
    }, [])

    useEffect( () => {
        fetch( url )
            .then(  resp =>  resp.json() )
            .then( data =>{
                
                if(isMounted.current){
                    setState({
                        error: null,
                        data
                    })
                }
            })
            .catch(() =>{
                setState({
                    data: null,
                    error: 'No se pudo cargar la información'
                })
            })
  
    }, [url])

    return state;
}