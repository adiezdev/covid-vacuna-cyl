import React, { useReducer } from 'react'
import { themeSwitchReduce } from './themeSwitchReduce';

const init = () =>{
    return JSON.parse(localStorage.getItem('theme')) || ''
}
export const ThemeSwitchComponent = () => {

    const [state, dispatch] = useReducer(themeSwitchReduce, '', init)

    console.log(state);
    return (
        <div className='switchComponent'>
            <div
                className='theme sun'
                role='img'
                onClick={() => dispatch({
                    type: 'light'
                })}
            >
            🌞
            </div>
            <div
                className='theme laptop'
                role='img'
            >
            💻
            </div>
            <div
                className='theme moon'
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
