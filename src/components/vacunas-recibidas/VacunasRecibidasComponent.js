import React, { useMemo } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { getTotalVacunasRecibidas } from '../../selectors/vacunas-recibidas/getTotalVacunasRecibidas';

export const VacunasRecibidasComponent = () => {

    const { data: vacunasrecibidas, isLogin} = useFetch('https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=vacunas-recibidas-covid&q=&rows=27&sort=fecha&facet=fecha&facet=provincia&facet=marca') || {}

    const sumaReduce = useMemo(() => getTotalVacunasRecibidas(vacunasrecibidas ), [vacunasrecibidas]) 

    let { total , groupByType} = sumaReduce;
    
    const { AstraZeneca, Moderna ,Pfizer } = {...groupByType}

    return (
        <div>
            <h3 className="t-center-big">Total de vacunas recibidas</h3>
            <div className="center-item-wrap">
                {
                !isLogin ?
                    <div className="maincard card-fiexWidth-big">
                    <header className="t-big">Total</header>
                    <div className="data t-big">{total}</div>
                    {
                    <ul>
                        <li className="t-center-midle">{Pfizer.vacuna}</li>
                        <li className="t-center-midle">{Moderna.vacuna}</li>
                        <li className="t-center-midle">{AstraZeneca.vacuna}</li>
                    </ul>
                    }
                    </div>
                :<div className="spinner p-inline-block"></div>
                }
            </div>
        </div>
    )
}
