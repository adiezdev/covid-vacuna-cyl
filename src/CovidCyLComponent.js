import React from 'react'
import { FooterComponent } from './components/FooterComponent'
import { MapComponent } from './components/MapComponent'
import { ThemeSwitchComponent } from './components/theme/ThemeSwitchComponent'
import { DosisAdministradasComponent } from './components/vacunas-administradas/DosisAdministradasComponent'
import { VacunasRecibidasComponent } from './components/vacunas-recibidas/VacunasRecibidasComponent'

export const CovidCyLComponent = () => {

    return (
        <>
        <ThemeSwitchComponent/>
        <h1 className="center-item-wrap t-big">
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
        <div className=''>
            <h1 className='t-center-big'>Datos obtenidos</h1>
            <p
                className='t-center-small'
            ><img
            src={'./assets/cyl.png'}
            alt={'Escudo de la cominidad de castilla y leon'}
            width={25}
            /><a
            href={'https://analisis.datosabiertos.jcyl.es/explore/dataset/vacunas-recibidas-covid/'}>
                API de la Junta de Castilla y León Vacunas recibidas covid
            </a></p>
            <p
                className='t-center-small'
            >
            <img
            src={'./assets/cyl.png'}
            alt={'Escudo de la cominidad de castilla y leon'}
            width={25}
            />
            <a
            href={'https://analisis.datosabiertos.jcyl.es/explore/dataset/personas-vacunadas-covid/'}>
                API de la Junta de Castilla y León Personas vacunadas covid
            </a>
            </p>
        </div>
        <FooterComponent/>
        </>
    )
}
