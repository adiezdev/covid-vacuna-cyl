import React from 'react'
import ReactTooltip from 'react-tooltip';
import data from '../data/cyl.geo.json'

import * as d3  from "d3";

import { useWindowSize } from '../hooks/useWindowSize';
import { useFetch } from '../hooks/useFetch';
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas';
import { getVacunasRecibidas } from '../selectors/vacunas-recibidas/getVacunasRecibidas';


export const MapComponent = () => {
        

    const { data: personasvacunadasproprovincia  } = useFetch( 3000 , 'personas-vacunadas-covid')
    const { ...groupByDosisProvincia } =  getPersonasVacunadas( personasvacunadasproprovincia )

    const { data: vacunasrecibidas  } = useFetch(36 , 'vacunas-recibidas-covid')
    const { groupByVacunasProvincias } = getVacunasRecibidas( vacunasrecibidas )

    const  {windowSize}  = useWindowSize();
    //Projection to map
    const projection = d3.geoMercator()
                        .scale([windowSize.with > 722 ? 6800 :  (950 * windowSize.with)/100])
                        .center([ windowSize.with > 435 ?  (-0.45 * windowSize.with)/100 : windowSize.with > 360 ? (-0.05* windowSize.with)/100  : ( 0.20 * windowSize.with)/100  , windowSize.with > 500 ? 42 : 41.2])
    //Paint var to json
    const pathGenerator = d3.geoPath().projection(projection)
    
    const fillmap = (provincia) =>{
        const numeroVacunas = groupByDosisProvincia[provincia] || ''

        if(numeroVacunas){
            if(numeroVacunas.vacuna <= 85000)
                return '#6ACA2B'
            if(numeroVacunas.vacuna <= 95000)
                return '#63BF28'
            if(numeroVacunas.vacuna <= 115000)
                return '#57AC20'
            if(numeroVacunas.vacuna <= 135000)
                return '#50A01D'
            if(numeroVacunas.vacuna <= 145000)
                return '#438B16'
            if(numeroVacunas.vacuna <= 155000)
                return '#3B7C13'
            if(numeroVacunas.vacuna <= 205000)
                return '#367310'
            if(numeroVacunas.vacuna <= 255000)
                return '#2F670C'
            if(numeroVacunas.vacuna <= 305000)
                return '#2B5F0A'
            if(numeroVacunas.vacuna <= 355000)
                return '#255905'
        }
        return 'green'
    }

    return (
        <>     
        <svg          
            className="cylmap centerItem"
        >
         {
            data.features.map((d,i)=>
            <path
                key={`path${i}`}
                d={pathGenerator(d)}
                className="provincies"
                data-tip={d.properties.name} //We pass the province to the toolip
                data-for='data-province'
                style={{fill: fillmap(d.properties.name)}}
            />
            )
        }
        </svg>
        <ReactTooltip id='data-province' aria-haspopup='true' getContent={(dataTip)=>
            !groupByDosisProvincia[dataTip] || !groupByVacunasProvincias[dataTip]
            ?
            dataTip
            :
            <div className="t-small">
                <div className='t-small t-center'>{dataTip}</div>
                <p> - Dosis Administradas: {groupByDosisProvincia[dataTip].vacuna}</p>
                <p> - Dosis Recibidas: {groupByVacunasProvincias[dataTip].vacuna}</p>
            </div>
        }/>
        </>
    )
}
