import React from 'react'

/*
* Componente project information
*/
export const FooterComponent = () => {
    console.log("¡Te pillé!😜\n%c+","font-size: 12px; padding: 30px 200px; line-height: 200px; background: url(https://media.giphy.com/media/6ra84Uso2hoir3YCgb/giphy.gif); color: transparent;");
    return (
        <>
        <footer className="footer">
            <p>
                Desarrollado por <a href='https://github.com/adiezdev'>Alejandro Díez</a> inspirado en el proyecto <a href='https://covid-vacuna.app/'>Covid-vacuna</a>
            </p>
            <p>
                Si quieres mi proyecto <a href='https://github.com/adiezdev/covid-vacuna-cyl'>aquí está</a>
            </p>
            <div><a href='https://www.linkedin.com/in/adilosa95/'>Linkedin</a> | <a href='https://github.com/adiezdev'>Github</a> | <a href='https://dev.to/adilosa95'>Dev</a></div>
        </footer>
        </>
    )
}
