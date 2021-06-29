import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas'
import { SpinnerComponent } from './SpinnerComponent'

export const ProgressBar = () => {
    const { data: personasvacunadasproprovincia , isLogin } = useFetch( 1 , 'personas-vacunadas-covid','TotalCyL')
    const { totalProgresivoPersonas } =  getPersonasVacunadas( personasvacunadasproprovincia )
    console.log(totalProgresivoPersonas);
    return (
        <> 
        {
            !isLogin 
            ?
            totalProgresivoPersonas.map(totalProgresivoPersona=>(
            <div className="container-progress">
                <div 
                className="filler-progress" 
                style={{width: `${totalProgresivoPersona.fields.porcentaje_residentes_1a_dosis.toFixed(2)}%` }}
                >
                    <span 
                    className="label-progres t-midle"
                    >{ totalProgresivoPersona.fields.porcentaje_residentes_1a_dosis.toFixed(2)}%</span>
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
