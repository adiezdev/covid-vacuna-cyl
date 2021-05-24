import React from 'react'

import * as d3  from "d3";

import { useFetch } from '../hooks/useFetch';
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas';


export const Graphics = () => {
    const { data: personasvacunadasproprovincia , isLogin } = useFetch( 3000 , 'personas-vacunadas-covid')
    const { totalProgresivo } =  getPersonasVacunadas( personasvacunadasproprovincia )
    const svg = d3.select(".grap")

    if(!isLogin && totalProgresivo)
    {
        const parseDate = () => d3.timeParse("%Y-%m-%d")
        //Add X
        const margin = {
            top: 20,
            right: 30,
            bottom: 30,
            left: 40
          }
          const yAxis = (g) => g
                    .attr("transform", `translate(${margin.left},0)`)
                    .call(d3.axisLeft(y))
                    .call(g => g.select(".domain").remove())
                    .call(g => g.select(".tick:last-of-type text").clone()
                        .attr("x", 3)
                        .attr("text-anchor", "start")
                        .attr("font-weight", "bold")
                        .text("$ Close"))
          const y = d3.scaleLinear()
          .domain([0, d3.max(totalProgresivo, d => d.fields.dosis_administradas)]).nice()
          .range([700 - margin.bottom, margin.top])

          const xAxis = g => g
          .attr("transform", `translate(0,${700 - margin.bottom})`)
          .call(d3.axisBottom(x).ticks(1000 / 80).tickSizeOuter(0))

          const x = d3.scaleUtc()
          .domain(d3.extent(totalProgresivo, d => (d3.timeParse("%Y-%m-%d")(d.fields.fecha))))
          .range([margin.left, 1300 - margin.right])

          const line = d3.line()
            .defined(d => !isNaN(d.fields.dosis_administradas))
            .x(d => x((d3.timeParse("%Y-%m-%d")(d.fields.fecha))))
            .y(d => y(d.fields.dosis_administradas))

           svg.append("g")
                .call(yAxis)
            
            
           svg.append("g")
           .call(xAxis)


           svg.append("path")
           .datum(totalProgresivo)
           .attr("fill", "none")
           .attr("stroke", "steelblue")
           .attr("stroke-width", 1.5)
           .attr("d", line); 
    }    
    return (
        <div>
            <svg 
            className="centerItem"
            width="100%"
            height="170vh"
            >
                <g 
                className="grap"
                transform="translate(100 , 100)">

                </g>
            </svg>
        </div>
    )
}
