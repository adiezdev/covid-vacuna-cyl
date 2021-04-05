import React from 'react'
import ReactTooltip from 'react-tooltip';
import data from '../data/cyl.geo.json'

import * as d3  from "d3";

import { useWindowSize } from '../hooks/useWindowSize';
import { useFetch } from '../hooks/useFetch';
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas';
import { getVacunasRecibidas } from '../selectors/vacunas-recibidas/getVacunasRecibidas';


export const MapComponent = () => {
        

    const { data: personasvacunadasproprovincia  } = useFetch( 1000 , 'personas-vacunadas-covid')
    const { ...groupByDosisProvincia } =  getPersonasVacunadas( personasvacunadasproprovincia )

    const { data: vacunasrecibidas  } = useFetch(27 , 'vacunas-recibidas-covid')
    const { groupByVacunasProvincias } = getVacunasRecibidas( vacunasrecibidas )

    const  {windowSize}  = useWindowSize();
    //Projection to map
    const projection = d3.geoMercator()
                        .scale([windowSize.with > 722 ? 6800 :  (950 * windowSize.with)/100])
                        .center([ windowSize.with > 435 ?  (-0.45 * windowSize.with)/100 : windowSize.with > 360 ? (-0.05* windowSize.with)/100  : ( 0.20 * windowSize.with)/100  , windowSize.with > 500 ? 42 : 41.2])
    //Paint var to json
    const pathGenerator = d3.geoPath().projection(projection)
    
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
