import React from 'react'
import { MapComponent } from './components/MapComponent'
import { DosisAdministradasComponent } from './components/vacunas-administradas/DosisAdministradasComponent'
import { VacunasRecibidasComponent } from './components/vacunas-recibidas/VacunasRecibidasComponent'

export const CovidCyLComponent = () => {

    return (
        <>
        <h1 className="center-item-wrap t-big">
            <img 
            src={'./assets/cyl.png'}
            width={100}/>
            Vacunación contra la COVID-19 en Castilla y León
        </h1>
            <DosisAdministradasComponent />
            <VacunasRecibidasComponent/>
            <MapComponent/>
        </>
    )
}
