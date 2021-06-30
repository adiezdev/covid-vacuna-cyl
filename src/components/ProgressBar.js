import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas'
import { SpinnerComponent } from './SpinnerComponent'

export const ProgressBar = () => {
    const { data: personasvacunadasproprovincia , isLogin } = useFetch( 1 , 'personas-vacunadas-covid','TotalCyL')
    const { totalProgresivoPersonas } =  getPersonasVacunadas( personasvacunadasproprovincia )

    return (
        <> 
        {
            !isLogin 
            ?
            totalProgresivoPersonas.map(totalProgresivoPersona=>(
            <div className="container-progress">
                <div 
                className="filler-progress" 
                style={
                    {width: `${totalProgresivoPersona.fields.porcentaje_residentes_1a_dosis.toFixed(2)}%`}
                }
                onAnimationStart="grwoup 2s ease-in-out;"
                >
                    <span 
                    className="label-progres t-midle"
                    role="progressbar"
                    aria-valuenow={totalProgresivoPersona.fields.porcentaje_residentes_1a_dosis.toFixed(2)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    >{totalProgresivoPersona.fields.porcentaje_residentes_1a_dosis.toFixed(2)}%</span>
                </div>
            </div> 
            ))
            : 
            <div className="grap center-item-wrap-grap">
            <SpinnerComponent/>
            </div>
        }
      
        </>
    )
}
