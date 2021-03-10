import React from 'react'
import { FooterComponent } from './components/FooterComponent'
import { MapComponent } from './components/MapComponent'
import { DosisAdministradasComponent } from './components/vacunas-administradas/DosisAdministradasComponent'
import { VacunasRecibidasComponent } from './components/vacunas-recibidas/VacunasRecibidasComponent'

export const CovidCyLComponent = () => {

    return (
        <>
        <h1 className="center-item-wrap t-big">
            <img 
            src={'./assets/cyl.png'}
            alt={'Escudo de la cominidad de castilla y leon'}
            width={100}/>
            Vacunación contra la COVID-19 en Castilla y León
        </h1>
        <h3 
        className="t-center-big">
            Vacunas Adminitradas
        </h3>
        <DosisAdministradasComponent />
        <h3
        className="t-center-big">
            Total de vacunas recibidas
        </h3>
        <VacunasRecibidasComponent/>
        <h1 
        className="t-center-big"
        >
            Datos por provincias
        </h1>
        <MapComponent/>
        <FooterComponent/>
        </>
    )
}
