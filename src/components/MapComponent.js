import React from 'react'
import ReactTooltip from 'react-tooltip';
import data from '../data/cyl.geo.json'

import * as d3  from "d3";

import { useWindowSize } from '../hooks/useWindowSize';
import { useFetch } from '../hooks/useFetch';
import { getTotalPersonasVacunadas } from '../selectors/personas-vacunadas/getTotalPersonasVacunadas';
import { getTotalVacunasRecibidas } from '../selectors/vacunas-recibidas/getTotalVacunasRecibidas';


export const MapComponent = () => {
        

    const { data: personasvacunadasproprovincia  } = useFetch( 1000 , 'personas-vacunadas-covid')
    const datapersonasVacunadas =  getTotalPersonasVacunadas( personasvacunadasproprovincia )
    const { ...groupByDosisProvincia } = datapersonasVacunadas;

    const { data: vacunasrecibidas  } = useFetch(27 , 'vacunas-recibidas-covid')
    const sumaReduce = getTotalVacunasRecibidas( vacunasrecibidas )

    const { groupByVacunasProvincias } = sumaReduce;


    const size = useWindowSize();
    //Projection to map
    const projection = d3.geoMercator()
                        .scale([size.with > 722 ? 6800 :  (950 * size.with)/100])
                        .center([ size.with > 435 ?  (-0.45 * size.with)/100 : size.with > 360 ? (-0.05* size.with)/100  : ( 0.20 * size.with)/100  , size.with > 500 ? 42 : 41.2])
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
                data-tip={d.properties.name}
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
