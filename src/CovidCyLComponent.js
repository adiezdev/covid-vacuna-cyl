import React from 'react'
import { FooterComponent } from './components/FooterComponent'
import { Graphics } from './components/Graphics'
import { MapComponent } from './components/MapComponent'
import { ProgressBar } from './components/ProgressBar'
import { ThemeSwitchComponent } from './components/theme/ThemeSwitchComponent'
import { DosisAdministradasComponent } from './components/vacunas-administradas/DosisAdministradasComponent'
import { VacunasRecibidasComponent } from './components/vacunas-recibidas/VacunasRecibidasComponent'

export const CovidCyLComponent = () => {

    return (
        <>
        <ThemeSwitchComponent/>
        <h1 className="t-center t-big">
            Vacunación contra la COVID-19 en Castilla y León
        </h1>
        <h3 
        className="t-center t-big">
            Vacunas Adminitradas
        </h3>
        <DosisAdministradasComponent />
        <h3
        className="t-center t-big">
            Total de vacunas recibidas
        </h3>
        <VacunasRecibidasComponent/>
        <h1 className="t-center t-big">Porcentaje de la población vacunada</h1>
        <ProgressBar/>
        <h1 
        className="t-center t-big"
        >
            Datos por provincias
        </h1>
        <MapComponent/>

        <Graphics/>
        <div>
            <h1 className='t-center t-big'>Datos obtenidos</h1>
            <p
                className='t-center t-small'
            ><img
            src={'./assets/cyl.png'}
            alt={'Escudo de la cominidad de castilla y leon'}
            width={25}
            /><a 
            target="_blank"
            href={'https://analisis.datosabiertos.jcyl.es/explore/dataset/vacunas-recibidas-covid/'} rel="noreferrer">
                API de la Junta de Castilla y León Vacunas recibidas covid
            </a></p>
            <p
                className='t-center t-small'
            >
            <img
            src={'./assets/cyl.png'}
            alt={'Escudo de la cominidad de castilla y leon'}
            width={25}
            />
            <a
            target="_blank"
            href={'https://analisis.datosabiertos.jcyl.es/explore/dataset/personas-vacunadas-covid/'}>
                API de la Junta de Castilla y León Personas vacunadas covid
            </a>
            </p>
        </div>
        <FooterComponent/>
        </>
    )
}
