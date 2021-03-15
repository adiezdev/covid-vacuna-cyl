import React from 'react'

/*
Componente con información del proyecto estático
*/
export const FooterComponent = () => {
    return (
        <>
        <footer className="footer">
            <p>
                Desarrollado por <a href='https://github.com/adilosa95'>Alejandro Díez</a> inspirado en el proyecto <a href='https://covid-vacuna.app/'>Covid-vacuna</a>
            </p>
            <p>
                Si quieres mi proyecto <a href='https://github.com/adilosa95/covid-vacuna-cyl'>aquí está</a>
            </p>
            <div><a href='https://www.linkedin.com/in/adilosa95/'>Linkedin</a> | <a href='https://github.com/adilosa95'>Github</a> | <a href='https://dev.to/adilosa95'>Dev</a></div>
        </footer>
        </>
    )
}
