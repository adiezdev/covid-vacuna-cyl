import { useEffect, useState } from "react"



export const useWindowSize = () =>{
    //Inicialite with/heigth for server an render to match
    const [windowSize, setwindowSize] = useState({
        with: undefined,
        height: undefined,
    });

    useEffect(() => {
        //Call function on window resize
        const handleResize = () =>{
            setwindowSize({
                with: window.innerWidth,
                height: window.innerHeight
            })
        }
        //Add event listener
        window.addEventListener("resize" , handleResize)
        //CalResize when update initial size
        handleResize();
        //remove before eventi listener
        return () => window.removeEventListener("resize" , handleResize)
    },[])

   return {windowSize}
}