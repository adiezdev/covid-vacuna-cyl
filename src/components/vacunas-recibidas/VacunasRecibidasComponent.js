import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getTotalVacunasRecibidas } from '../../selectors/vacunas-recibidas/getTotalVacunasRecibidas';

export const VacunasRecibidasComponent = () => {

    const { data , isLogin } = useFetch(27 , 'vacunas-recibidas-covid')
    const sumaReduce = getTotalVacunasRecibidas( data )

    let { total , groupByType} = sumaReduce;
    
    const { AstraZeneca, Moderna ,Pfizer } = {...groupByType}

    return (
        <div>
            <div className="center-item-wrap">
                { 
                !isLogin ?
                    <div className="maincard card-fiexWidth-big">
                    <header className="t-big">Total</header>
                    <div className="data t-big">{total}</div>
                    {
                    <ul className='types-vaccines'>
                        <li className="t-midle">
                            <img src='./assets/vacunas/pfizer.png' alt='Pfizer'/>
                            <div>{Pfizer.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/moderna.png' alt='Pfizer'/>
                            <div>{Moderna.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/astraceneca.png' alt='Pfizer'/>
                            <div>{AstraZeneca.vacuna}</div>
                        </li>
                    </ul>
                    }
                    </div>
                :<div className="spinner p-inline-block"></div>
                }
            </div>
        </div>
    )
}
