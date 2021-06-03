import React from 'react'

import * as d3  from "d3";

import { useFetch } from '../hooks/useFetch';
import { getPersonasVacunadas } from '../selectors/personas-vacunadas/getPersonasVacunadas';
import { SpinnerComponent } from './SpinnerComponent';


export const Graphics = () => {
    const { data: personasvacunadasproprovincia , isLogin } = useFetch( 3000 , 'personas-vacunadas-covid')
    const { totalProgresivoPersonas } =  getPersonasVacunadas( personasvacunadasproprovincia )
    const { data:totalProgresivoVacunas  , isLogin: isLogin2} = useFetch(6000 , 'vacunas-recibidas-covid')

    const llistdatas = [
    {
        title: 'Progreso de dosis administradas',
        data: totalProgresivoPersonas,
        type: 'dosis_administradas'
    },
    {
        title: 'Progreso de vacunas recibidas',
        data: totalProgresivoVacunas,
        type: 'total_vacunas_recibidas'
    }];

    
    function createGrapihc(data , type, title){
        const svg =  d3.select(".grap").append("svg").attr("viewBox", "-220 -10 1500 600")
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
                        .call(g => g.select(".tick:last-of-type text").clone())
              const y = d3.scaleLinear()
              .domain([0, d3.max(data, d => d.fields[type])]).nice()
              .range([600 - margin.bottom, margin.top])
    
              const xAxis = (g) => g
              .attr("transform", `translate(0,${600 - margin.bottom})`)
              .call(d3.axisBottom(x).ticks(1000 / 80).tickSizeOuter(0))
    
              const x = d3.scaleUtc()
              .domain(d3.extent(data, d => (d3.timeParse("%Y-%m-%d")(d.fields.fecha))))
              .range([margin.left, 1200 - margin.right])
    
              const line = d3.line()
                .curve(d3.curveBasis) 
                .defined(d => !isNaN(d.fields[type]))
                .x(d => x((d3.timeParse("%Y-%m-%d")(d.fields.fecha))))
                .y(d => y(d.fields[type]))

            
               svg.append("g")
                    .call(yAxis)
                
               svg.append("g")
               .call(xAxis)

               svg.append("text")
                .attr("class", "title")
                .attr("class", "t-big")
                .attr("fill", "var(--colortext--default)")
                .attr("x", (500 - margin.right)/2)
                .attr("y", margin.top)
                .text(title);
            
               svg.append("path")
               .datum(data)
               .attr("fill", "none")
               .attr("stroke", "var(--primary--color)")
               .attr("stroke-width", 5)
               .attr("d", line); 

    }
    return (
        <div className="grap center-item-wrap-grap">
            {
               !isLogin && !isLogin2 ?  
               llistdatas.map(llistdata =>(                
                createGrapihc(llistdata.data, llistdata.type, llistdata.title)
                )) :  <SpinnerComponent />

            }
        </div>
    )
}
