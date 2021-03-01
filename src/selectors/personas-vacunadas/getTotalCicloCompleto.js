

export const getTotalCicloCompleto = (data) =>{
    const { records } = data || {}

    const total = records && records.reduce((count  , data) =>
    {
        const { personas_vacunadas_ciclo_completo } = data.fields
        
        return count + personas_vacunadas_ciclo_completo;
    },0)
    return {total};
}