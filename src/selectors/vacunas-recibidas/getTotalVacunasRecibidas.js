import { renameKeys } from '../../functions/functionRemaneKeysObj';


export const getTotalVacunasRecibidas = ( data )=>{
    const { records } = data || {}

    const total = records && records.reduce((count , data)=>{
        const { total_vacunas_recibidas  } = data.fields

        return count + parseInt(total_vacunas_recibidas);
    }, 0)

    let groupByType = records && records.reduce((group , data)=>{
        const { total_vacunas_recibidas , marca } = data.fields
        
        group[marca] =group[marca] || {vacuna:0}
        group[marca].vacuna += total_vacunas_recibidas


        return group;
    }, {})

    groupByType = renameKeys(groupByType , 'Astra Zéneca' , 'AstraZeneca')
    groupByType = renameKeys(groupByType , 'Pfizer- BioNTech' , 'Pfizer')

    
    let groupByTypeProvinces = records && records.reduce((group , data)=>{
        const { total_vacunas_recibidas  , provincia } = data.fields
        
        console.log(provincia);

        group[provincia] =group[provincia] || {vacuna:0}
        group[provincia].vacuna += total_vacunas_recibidas


        return group;
    }, {})

    console.log( groupByTypeProvinces);
    
    return { total, groupByType , groupByTypeProvinces};
}