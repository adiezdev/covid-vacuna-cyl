import React, { useMemo } from 'react'
import { CardDosisAdministradasComponent } from './CardDosisAdministradasComponent'
import { useFetch } from '../../hooks/useFetch'
import { getTotalPersonasVacunadas } from '../../selectors/personas-vacunadas/getTotalPersonasVacunadas'
import { getTotalCicloCompleto } from '../../selectors/personas-vacunadas/getTotalCicloCompleto'

export const DosisAdministradasComponent = () => {

    const { data: personasvacunadas, isLogin} = useFetch('https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=personas-vacunadas-covid&q=&rows=1000') || {}

    const informations = [
        {
            'id':  0,
            'title':'Personas vacunadas',
            'sumaReduce': useMemo(() => getTotalPersonasVacunadas(personasvacunadas ), [personasvacunadas]) 
        },
        {
            'id':  1,
            'title':'Personas con ciclo completo',
            'sumaReduce':  useMemo(() => getTotalCicloCompleto(personasvacunadas ), [personasvacunadas]) 
        }
    ]
    return (
        <>
            <div className="center-item-wrap flex-column">
                {
                    informations.map( information => (
                        <CardDosisAdministradasComponent
                            key={information.id}
                            sumaReduce={information.sumaReduce}
                            title={information.title}
                            loading={isLogin}
                        />
                    ))
                }
            </div>
        </>
        
    )
}