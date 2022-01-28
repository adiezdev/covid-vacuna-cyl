import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getVacunasRecibidas } from '../../selectors/vacunas-recibidas/getVacunasRecibidas';
import { SpinnerComponent } from '../SpinnerComponent';
import  ImgPifizer from '../../assets/vacunas/pfizer.png'
import  ImgModerna from '../../assets/vacunas/moderna.png'
import  ImgAstraceneca from '../../assets/vacunas/astraceneca.png'
import  ImgJanssen from '../../assets/vacunas/janssen.png'
/**
 * Component for 'Vacunas recbidas'
 * and brand vaccine type
 * @returns 
 */
export const VacunasRecibidasComponent = () => {
    //Because to 36 lines is equals to last modification
    const { data , isLogin } = useFetch( 'vacunas-recibidas-covid')

    const { total , groupByMarca: { AstraZeneca, Moderna ,Pfizer, Janssen } }  = getVacunasRecibidas( data )
    
    // const {count} = useIncrement(total)

    // const {count: cPfizer} = useIncrement(Pfizer?.vacuna)
    // const {count: cModerna} = useIncrement(Moderna?.vacuna)
    // const {count: cAstraZeneca} = useIncrement(AstraZeneca?.vacuna)
    // const {count: cJanssen} = useIncrement(Janssen?.vacuna)

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
                            <img src={ImgPifizer} alt='Pfizer'/>
                            <div>{Pfizer?.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src={ImgModerna} alt='Moderna'/>
                            <div>{Moderna?.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src={ImgAstraceneca} alt='Astraceneca'/>
                            <div>{AstraZeneca?.vacuna}</div>
                        </li>
                        <li className="t-midle">
                            <img src={ImgJanssen} alt='Janssen'/>
                            <div>{Janssen?.vacuna}</div>
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
