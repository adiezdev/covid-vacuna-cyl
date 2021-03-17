

export const getTotalCicloCompleto = (records) =>{


    const total = records?.reduce((count  , data) =>
    {
        const { personas_vacunadas_ciclo_completo } = data.fields
        
        return count + personas_vacunadas_ciclo_completo;
    },0)
    return {total};
}