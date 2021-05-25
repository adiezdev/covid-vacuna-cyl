/**
 * 
 */

export const getPersonasVacunadas = ( records )=>{


    const total = records?.filter((data) => data.fields.provincia === "TotalCyL").reduce((count  , data)=>{
        const { dosis_administradas  } = data.fields

        return count + dosis_administradas;
    }, 0)


    const ciclototal = records?.filter((data) => data.fields.provincia === "TotalCyL").reduce((count  , data) =>
    {
        const { personas_vacunadas_ciclo_completo } = data.fields
        
        return count + personas_vacunadas_ciclo_completo;
    },0)

   
    const groupByDosisProvincia = records?.reduce((group , data)=>{
        const { dosis_administradas , provincia } = data.fields
        
        group[provincia] =group[provincia] || {vacuna: 0}
        group[provincia].vacuna += dosis_administradas


        return group;
    }, {})

    const totalProgresivo = records?.filter((data) => data.fields.provincia === "TotalCyL");

    return {total , ciclototal, ...groupByDosisProvincia, totalProgresivo};
}