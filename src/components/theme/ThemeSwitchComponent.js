import React, { useEffect, useReducer } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { themeSwitchReduce } from './themeSwitchReduce';

/**
 * Check init localstorage
*/

export const ThemeSwitchComponent = () => {

    const [state, dispatch] = useReducer(themeSwitchReduce , '')
    //Inicializamos con el theme del sistema
    const [storagevalues , setStorage] = useLocalStorage('data-theme','other')

    /**
     * Lee el valor por guardado del hook local storage
     */
    useEffect(() => {
        //cambia el tema en el sistema por el que esté
        dispatch({
            type: storagevalues
        })

    }, [storagevalues])

    //Llamada para poder cambiar manualmente el theme de la pagina
    const  handleOnClick = ( type )  => {
        //disparador
        dispatch({ type: type })
        //cambio en el localstorage
        setStorage(type)
    }
    /**
     * If useReducer return state ative, check is same to type and add class isActiviated
     */
    return (
        <div className='switchComponent'>
            <label
                className={`theme ${state.type === 'light' ? state.active : ''}`}
                onClick={() => handleOnClick('light')}
            >
                <span role='img'>☀️</span>
            </label>
            <label
                 className={`theme ${state.type === 'other' ? state.active : ''}`}
                 onClick={() => handleOnClick('other')}

            >
                <span role='img'>💻</span>
            </label>
            <label
                 className={`theme ${state.type === 'dark' ? state.active : ''}`}
                 onClick={() => handleOnClick('dark')}

            >
                <span role='img'>🌑</span>
            </label>
        </div>
    )
}
