/**
 * Funtion to call enpoints Api
 */
export const getVacunasCyL = async( lines = '1000' , dataset, provincia) =>{

    
    let url = ``;

    if( !provincia ){
        url = `https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=${dataset}&q=&rows=${lines}&sort=fecha&facet=fecha&facet=provincia&facet=marca`;
    }else{
        url = `https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=${dataset}&q=&rows=${lines}&sort=fecha&facet=fecha&facet=provincia&facet=marca&refine.provincia=${provincia}`;
    }

    const resp = await fetch(url)
    const  { records }  = await resp.json() 

    const vacunasrecibidas = records?.map( record =>{ 
        return{
            id: record.recordid,
            fields: record.fields
        }
    })
    return vacunasrecibidas;
}