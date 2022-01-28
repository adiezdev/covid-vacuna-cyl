/**
 * 
 */

export const getPersonasVacunadas = (records) => {

    const total = records?.filter((data) => data.fields.provincia === "TotalCyL").reduce((count, data) => {
        const { dosis_administradas } = data.fields

        return count + dosis_administradas;
    }, 0)


    const ciclototal = records?.filter((data) => data.fields.provincia === "TotalCyL").reduce((count, data) => {
        const { personas_vacunadas_ciclo_completo } = data.fields

        return count + personas_vacunadas_ciclo_completo;
    }, 0)


    const groupByDosisProvincia = records?.reduce((group, data) => {
        const { dosis_administradas, provincia } = data.fields

        group[provincia] = group[provincia] || { vacuna: 0 }
        group[provincia].vacuna += dosis_administradas


        return group;
    }, {})

    const totalProgresivoPersonas = records?.filter((data) => data.fields.provincia === "TotalCyL");

    const porcientoPoblacionVacunada = records?.filter((data) => data.fields.provincia === "TotalCyL").reduce((count, data) => {
        const { porcentaje_residentes_1a_dosis } = data.fields
        return porcentaje_residentes_1a_dosis;
    }, 0);


    return { total, ciclototal, ...groupByDosisProvincia, totalProgresivoPersonas, porcientoPoblacionVacunada };
}