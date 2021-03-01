import { useEffect, useRef, useState } from "react"



export const useFetch = ( url ) =>{

    const isMounted = useRef(true)
    const [isLogin, setisLogin] = useState(true)
    const [state, setState] = useState({ data: null , error: null , isLogin })

    useEffect(() => {
        return () =>{
            isMounted.current = false;
        }        
    }, [])

    useEffect( () => {
        const fecthjoke = async ()=>{
            const resp = await fetch(url)
            const json = await resp.json()
            if(isMounted.current){
                setState({ 
                    data: json,
                    error: null,
                    isLogin: false 
                })
            }
        }

        fecthjoke();
  
    }, [url])

    return state;
}