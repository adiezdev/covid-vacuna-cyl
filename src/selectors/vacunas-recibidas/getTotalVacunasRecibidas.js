import { renameKeys } from '../../functions/functionRemaneKeysObj';

export const getTotalVacunasRecibidas = ( records )=>{

    
    const total = records?.reduce((count , data)=>{
        const { total_vacunas_recibidas  } = data.fields

        return count + parseInt(total_vacunas_recibidas);
    }, 0)

    let groupByType = records?.reduce((groups , data)=>{
        const { total_vacunas_recibidas , marca } = data.fields
        
        groups[marca] = groups[marca] || {vacuna:0}
        groups[marca].vacuna += total_vacunas_recibidas
        
        return groups;
    }, {})

    groupByType = renameKeys(groupByType , 'Astra Zéneca' , 'AstraZeneca')
    groupByType = renameKeys(groupByType , 'Pfizer- BioNTech' , 'Pfizer')
    
    const groupByTypeProvinces = records?.reduce((group , data)=>{
        const { total_vacunas_recibidas  , provincia } = data.fields
        
        group[provincia] =group[provincia] || {vacuna:0}
        group[provincia].vacuna += total_vacunas_recibidas

        return group;
    }, {})
    
    return { total, groupByType , groupByTypeProvinces};
}