import React, { useEffect, useReducer } from 'react'
import { themeSwitchReduce } from './themeSwitchReduce';

/**
 * Check init localstorage
*/
const init = () =>{
    return localStorage.getItem('data-theme') || ''
}

export const ThemeSwitchComponent = () => {

    const [state, dispatch] = useReducer(themeSwitchReduce , init)

    /**
     * When logadind compoenent, check theme in local storage
     * if not init, predefinied 'other' in useReducer
    */
    useEffect(() => {
        
        const theme = localStorage.getItem('data-theme') || 'other'

        dispatch({
            type: theme
        })
    }, [])
    /**
     * If useReducer return state ative, check is same to type and add class isActiviated
     */
    return (
        <div className='switchComponent'>
            <label
                className={`theme ${state.type === 'light' ? state.active : ''}`}
                onClick={() => dispatch({
                    type: 'light'
                })}
            >
                <span role='img'>☀️</span>
            </label>
            <label
                 className={`theme ${state.type === 'other' ? state.active : ''}`}
                 onClick={() => dispatch({
                    type: 'other'
                })}
            >
                <span role='img'>💻</span>
            </label>
            <label
                 className={`theme ${state.type === 'dark' ? state.active : ''}`}
                 onClick={() => dispatch({
                    type: 'dark'
                })}
            >
                <span role='img'>🌑</span>
            </label>
        </div>
    )
}
