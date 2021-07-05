import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useIncrement } from '../hooks/useIncrement'
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas'
import { SpinnerComponent } from './SpinnerComponent'

export const ProgressBar = React.memo(() => {
    const { data , isLogin } = useFetch( 1 , 'personas-vacunadas-covid','TotalCyL')
    const {porcientoPoblacionVacunada} =getPersonasVacunadas( data )
    const {count} = useIncrement(porcientoPoblacionVacunada?.toFixed(1))
    return (
        <> 
        {
            !isLogin 
            ?
            <div className="container-progress">
                <div 
                className="filler-progress" 
                style={
                    {width: `${porcientoPoblacionVacunada}%`}
                }
                onAnimationStart="grwoup 2s ease-in-out;"
                >
                    <span 
                    className="label-progres t-midle"
                    role="progressbar"
                    aria-valuenow={porcientoPoblacionVacunada}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >{count}%</span>
                </div>
            </div> 
            : 
            <div className="grap center-item-wrap-grap">
            <SpinnerComponent/>
            </div>
        }
      
        </>
    )
})