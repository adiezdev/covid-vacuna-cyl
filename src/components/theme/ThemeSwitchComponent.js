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
            <div
                className={`theme ${state.type === 'light'? state.active : ''}`}
                role='img'
                onClick={() => dispatch({
                    type: 'light'
                })}
            >
            🌞</div>
            <div
                className={`theme ${state.type === 'other'? state.active : ''}`}
                role='img'
                onClick={()=>dispatch({
                    type: 'other'
                })}
            >
            💻
            </div>
            <div
                className={`theme ${state.type === 'dark'? state.active : ''}`}
                role='img'
                onClick={()=> dispatch({
                    type: 'dark'
                })}
            >
            🌚
            </div>
        </div>
    )
}
