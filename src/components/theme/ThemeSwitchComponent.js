import React, { useEffect, useReducer } from 'react'
import { themeSwitchReduce } from './themeSwitchReduce';

const init = () =>{
    return JSON.parse(localStorage.getItem('theme')) || ''
}
export const ThemeSwitchComponent = () => {

    const [state, dispatch] = useReducer(themeSwitchReduce, '', init)

    
    useEffect(() => {
        
        const theme = localStorage.getItem('data-theme')

        dispatch({
            type: theme
        })
    }, [])

    console.log(state.type);
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
