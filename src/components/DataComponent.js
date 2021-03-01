import React, { useMemo } from 'react'
import { CardDataComponent } from './CardDataComponent'
import { useFetch } from '../hooks/useFetch'
import { getTotalPersonasVacunadas } from '../selectors/personas-vacunadas/getTotalPersonasVacunadas'
import { getTotalCicloCompleto } from '../selectors/personas-vacunadas/getTotalCicloCompleto'
import { getTotalVacunasRecibidas } from '../selectors/vacunas-recibidas/getTotalVacunasRecibidas'

export const DataComponent = () => {
    const { data: personasvacunadas} = useFetch('https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=personas-vacunadas-covid&q=&rows=1000') || {}
    
    const { data: vacunasrecibidas, isLogin} = useFetch('https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=vacunas-recibidas-covid&rows=1000') || {}


    const informations = [
        {
            'id':  0,
            'title':'Total de personas vacunadas',
            'sumaReduce': useMemo(() => getTotalPersonasVacunadas(personasvacunadas ), [personasvacunadas]) 
        },
        {
            'id':  1,
            'title':'Total de personas vacunadas por el ciclo completo',
            'sumaReduce':  useMemo(() => getTotalCicloCompleto(personasvacunadas ), [personasvacunadas]) 
        },
        {
            'id':  2,
            'title':'Total de vacunas recibidas',            
            'sumaReduce': useMemo(() => getTotalVacunasRecibidas(vacunasrecibidas ), [vacunasrecibidas]) 
        },
    ]
    return (
        <>
            <h1 className="t-center-big">Datos Recibidos</h1>
            <div className="center-item-wrap">
                {
                    !isLogin ?
                    informations.map( information => (
                        <CardDataComponent
                            key={information.id}
                            sumaReduce={information.sumaReduce}
                            title={information.title}
                        />
                    ))
                    : <div className="spinner p-inline-blok"></div> 
                }
            </div>
        </>
        
    )
}