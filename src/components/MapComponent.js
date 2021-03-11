import React from 'react'
import ReactTooltip from 'react-tooltip';
import data from '../data/cyl.geo.json'
import * as d3  from "d3";
import { useWindowSize } from '../hooks/useWindowSize';
import { useFetch } from '../hooks/useFetch';
import { getTotalPersonasVacunadasProvincia } from '../selectors/personas-vacunadas/getTotalPersonasVacunadasProvincia';

export const MapComponent = () => {
        
    const { data: personasvacunadasproprovincia } = useFetch('https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=personas-vacunadas-covid&q=&rows=1000') || {}

    const groupByType =  getTotalPersonasVacunadasProvincia( personasvacunadasproprovincia )


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
            !groupByType[dataTip] 
            ?
            dataTip
            :
            <div className="t-center-small">
                {dataTip}
                <p> - Dosis Administradas: {groupByType[dataTip].vacuna}</p>
            </div>
            }/>
        </>
    )
}
