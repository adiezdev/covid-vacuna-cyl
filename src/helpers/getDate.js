/**
 * 
 * @returns 
 */
export const getDate = () => {
    const date = new Date();

    const iDay = date.getDate();  // Día actual
    const lDay = iDay - 2;        // Día actual - 2
    const iMonth = date.getMonth() + 1; // Mes actual
    const iYear = date.getFullYear(); // Año actual
    //2022-01-25
    return `${iYear}-${iMonth}-${lDay}`;
}
export const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

export const getConverMonth = (month) => {

    

    return months[month - 1]
}