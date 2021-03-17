

export const getTotalPersonasVacunadas = ( records )=>{


    const total = records?.reduce((count  , data)=>{
        const { dosis_administradas } = data.fields

        return count + dosis_administradas;
    }, 0)


    const ciclototal = records?.reduce((count  , data) =>
    {
        const { personas_vacunadas_ciclo_completo } = data.fields
        
        return count + personas_vacunadas_ciclo_completo;
    },0)
    return {total , ciclototal};
}