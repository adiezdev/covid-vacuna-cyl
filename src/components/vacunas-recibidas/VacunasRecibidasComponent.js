import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getTotalVacunasRecibidas } from '../../selectors/vacunas-recibidas/getTotalVacunasRecibidas';
import { SpinnerComponent } from '../SpinnerComponent';
/**
 * Component for 'Vacunas recbidas'
 * and brand vaccine type
 * @returns 
 */
export const VacunasRecibidasComponent = () => {
    //Because to 27 lines is equals to lat modification
    const { data , isLogin } = useFetch(27 , 'vacunas-recibidas-covid')
    const sumaReduce = getTotalVacunasRecibidas( data )
    
    //Desestructuin data
    const { total , groupByMarca} = sumaReduce;
    
    const { AstraZeneca, Moderna ,Pfizer } = {...groupByMarca}

    console.log(groupByMarca);
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
                            <img src='./assets/vacunas/moderna.png' alt='Moderna'/>
                            <div>{Moderna.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/astraceneca.png' alt='Astraceneca'/>
                            <div>{AstraZeneca.vacuna}</div>
                        </li>
                    </ul>
                    }
                    </div>
                :<SpinnerComponent></SpinnerComponent>
                }
            </div>
        </div>
    )
}
