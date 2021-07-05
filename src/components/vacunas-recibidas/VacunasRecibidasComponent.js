import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useIncrement } from '../../hooks/useIncrement';
import { getVacunasRecibidas } from '../../selectors/vacunas-recibidas/getVacunasRecibidas';
import { SpinnerComponent } from '../SpinnerComponent';
/**
 * Component for 'Vacunas recbidas'
 * and brand vaccine type
 * @returns 
 */
export const VacunasRecibidasComponent = () => {
    //Because to 36 lines is equals to last modification
    const { data , isLogin } = useFetch(36 , 'vacunas-recibidas-covid')
    const { total , groupByMarca: { AstraZeneca, Moderna ,Pfizer, Janssen } }  = getVacunasRecibidas( data )
    
    const {count} = useIncrement(total)

    const {count: cPfizer} = useIncrement(Pfizer?.vacuna)
    const {count: cModerna} = useIncrement(Moderna?.vacuna)
    const {count: cAstraZeneca} = useIncrement(AstraZeneca?.vacuna)
    const {count: cJanssen} = useIncrement(Janssen?.vacuna)

    return (
        <div>
            <div className="center-item-wrap">
                { 
                !isLogin ?
                    <div className="maincard card-fiexWidth-big" data-testid='list'>
                    <header className="t-big">Total</header>
                    <div className="data t-big">{count}</div>
                    {
                    <ul className='types-vaccines'>
                        <li className="t-midle">
                            <img src='./assets/vacunas/pfizer.png' alt='Pfizer'/>
                            <div>{cPfizer}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/moderna.png' alt='Moderna'/>
                            <div>{cModerna}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/astraceneca.png' alt='Astraceneca'/>
                            <div>{cAstraZeneca}</div>
                        </li>
                        <li className="t-midle">
                            <img src='./assets/vacunas/janssen.png' alt='Janssen'/>
                            <div>{cJanssen}</div>
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
