import React from 'react'

export const CardDataComponent = ({ sumaReduce,title}) => {

    let { total , groupByType} = sumaReduce;
    
    const { AstraZeneca, Moderna ,Pfizer } = {...   groupByType}
    console.log( groupByType);
    return (
        <div className="maincard">
            <header className="t-center-big">{ title }</header>
            {
                !total ? 
                <div className="spinner p-inline-blok"></div> :
                 <div className="t-center-big">{total}</div>
            }
            {
                !AstraZeneca || !Moderna || !Pfizer ? 
                <div></div>:
                <ul>
                <li className="t-center-midle">{Pfizer.vacuna}</li>
                <li className="t-center-midle">{Moderna.vacuna}</li>
                <li className="t-center-midle">{AstraZeneca.vacuna}</li>
                </ul>
            }
        </div>
    )
}
