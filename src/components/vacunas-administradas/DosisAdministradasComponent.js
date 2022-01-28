import React from 'react'
import { CardDosisAdministradasComponent } from './CardDosisAdministradasComponent'
import { useFetch } from '../../hooks/useFetch'
import { getPersonasVacunadas } from '../../selectors/personas-vacunadas/getPersonasVacunadas'
import adminvacuna from '../../assets/icons/admin_vacuna.svg'
import vacunacompleta from '../../assets/icons/vacuna_completa.svg'

/**
 * Component form cards 
 *  -vacunas administradas
 *  -ciclo completo
 * @returns 
 */
export const DosisAdministradasComponent = () => {

    const { data, isLogin } = useFetch('personas-vacunadas-covid', 5000 )
    const { total, ciclototal } = getPersonasVacunadas(data)
    //Create array to tow data 
    const informations = [
        {
            id: 0,
            title: 'Personas vacunadas',
            sumaReduce: total,
            img: adminvacuna
        },
        {
            id: 1,
            title: 'Personas con pauta completa',
            sumaReduce: ciclototal,
            img: vacunacompleta
        }
    ]
    return (
        <>
            <div className="center-item-wrap flex-column">
                {
                    informations.map(information => (
                        <CardDosisAdministradasComponent
                            key={information.id}
                            total={information.sumaReduce}
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