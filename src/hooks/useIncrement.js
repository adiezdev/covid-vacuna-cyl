import { useEffect, useState } from "react"

/**
 * 
 * @param {*} total 
 * @returns 
 * 
 * Hook para crear dinamismo en el incremento de las cifras
 */
export const useIncrement = ( total = 0) =>{

    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0;
        const end = parseFloat(total.toString().substring(0,3))
        const duration = 2

        if( start === end) return;
        let incrementTime = (duration /end) * 1000

        let timer = setInterval(() =>{
            start +=1

            setCount(start + total.toString().substring(4))
            if( start === end) clearInterval(timer)
        }, incrementTime)
        
    }, [total])

    return {count};
}