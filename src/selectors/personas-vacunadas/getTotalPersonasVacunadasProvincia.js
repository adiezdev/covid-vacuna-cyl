

export const getTotalPersonasVacunadasProvincia = ( data  )=>{
    const { records } = data || {}

    let groupByType = records && records.reduce((group , data)=>{
        const { dosis_administradas , provincia } = data.fields
        
        group[provincia] =group[provincia] || {vacuna: 0}
        group[provincia].vacuna += dosis_administradas


        return group;
    }, {})

    return {...groupByType};
}