
import { renameKeys } from '../../functions/functionRemaneKeysObj';
/**
 * Method to add up all the figures of the vaccines, as the API does not give the option
 * @param {*} records 
 * @returns 
 */
export const getTotalVacunasRecibidas = ( records )=>{

    
    const total = records?.reduce((count , data)=>{
        const { total_vacunas_recibidas  } = data.fields

        return count + parseInt(total_vacunas_recibidas);
    }, 0)

    let groupByMarca = records?.reduce((groups , data)=>{
        const { total_vacunas_recibidas , marca } = data.fields
        
        groups[marca] = groups[marca] || {vacuna:0}
        groups[marca].vacuna += total_vacunas_recibidas
        
        return groups;
    }, {})

    groupByMarca = renameKeys(groupByMarca , 'Astra Zéneca' , 'AstraZeneca')
    groupByMarca = renameKeys(groupByMarca , 'Pfizer- BioNTech' , 'Pfizer')
    
    const groupByVacunasProvincias = records?.reduce((group , data)=>{
        const { total_vacunas_recibidas  , provincia } = data.fields
        
        group[provincia] =group[provincia] || {vacuna:0}
        group[provincia].vacuna += total_vacunas_recibidas

        return group;
    }, {})
    
    return { total, groupByMarca , groupByVacunasProvincias};
}