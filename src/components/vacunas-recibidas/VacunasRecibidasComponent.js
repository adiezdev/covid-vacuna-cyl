import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getVacunasRecibidas } from '../../selectors/vacunas-recibidas/getVacunasRecibidas';
import { SpinnerComponent } from '../SpinnerComponent';
/**
 * Component for 'Vacunas recbidas'
 * and brand vaccine type
 * @returns 
 */
export const VacunasRecibidasComponent = () => {
    //Because to 27 lines is equals to last modification
    const { data , isLogin } = useFetch(36 , 'vacunas-recibidas-covid')
    const { total , groupByMarca: { AstraZeneca, Moderna ,Pfizer, Janssen } }  = getVacunasRecibidas( data )
    console.log(getVacunasRecibidas( data ));
    return (
        <div>
            <div className="center-item-wrap">
                { 
                !isLogin ?
                    <div className="maincard card-fiexWidth-big" data-testid='list'>
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
                        <li className="t-midle">
                            <img src='./assets/vacunas/janssen.png' alt='Astraceneca'/>
                            <div>{Janssen.vacuna}</div>
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
