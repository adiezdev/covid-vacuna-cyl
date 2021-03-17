import React, { useMemo } from 'react'
import { CardDosisAdministradasComponent } from './CardDosisAdministradasComponent'
import { useFetch } from '../../hooks/useFetch'
import { getTotalPersonasVacunadas } from '../../selectors/personas-vacunadas/getTotalPersonasVacunadas'
import { getTotalCicloCompleto } from '../../selectors/personas-vacunadas/getTotalCicloCompleto'

/**
 * Component form cards 
 *  -vacunas administradas
 *  -ciclo completo
 * @returns 
 */
export const DosisAdministradasComponent = () => {

    const { data , isLogin } = useFetch( 1000 ,  'personas-vacunadas-covid')

    //Create array to tow data 
    const informations = [
        {
            id:  0,
            title:'Personas vacunadas',
            sumaReduce: getTotalPersonasVacunadas(data),
            img: './assets/icons/admin_vacuna'
        },
        {
            id:  1,
            title:'Personas con pauta completa',
            sumaReduce: getTotalCicloCompleto(data),
            img: './assets/icons/vacuna_completa'
        }
    ]
    return (
        <>
            <div className="center-item-wrap flex-column">
                {
                    informations.map( information => (
                        <CardDosisAdministradasComponent
                            key={information.id}
                            total={information.sumaReduce.total}
                            title={information.title}
                            img={information.img}
                            loading={isLogin}
                        />
                    ))
                }
            </div>
        </>
        
    )
}