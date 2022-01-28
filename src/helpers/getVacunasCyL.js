import { getDate } from "./getDate";

/**
 * Funtion to call enpoints Api
 */
export const getVacunasCyL = (dataset, lines, provincia) => {


    let url = `https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=`;
    if (dataset === 'vacunas-recibidas-covid' && !lines ) {
        url += `${dataset}&q&sort=fecha&rows=60&facet=fecha&facet=provincia&facet=marca&refine.fecha=${getDate()}`;
    } else {
        url += `${dataset}&q=&rows=${lines}&sort=fecha&facet=fecha&facet=provincia&facet=marca`;
    }
    if (provincia) {
        url += `&refine.provincia=${provincia}`;
    }

    return url;
}