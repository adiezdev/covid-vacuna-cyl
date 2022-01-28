import { getConverMonth, months } from "../../helpers/getDate"

export const groupByMesPv = (records) => {
    const groupByDosisMes = records?.reduce((group, data) => {
        const { dosis_administradas, fecha } = data.fields
        const [year, month] = fecha.split('-')
        group[year] = group[year] || { vacuna: 0 }
        group[year][month] = group[year][month] || { vacuna: 0 }

        group[year][month].vacuna += dosis_administradas

        return group;
    }, {})
    if (groupByDosisMes) {

        delete groupByDosisMes["fields"]
        delete groupByDosisMes["type"]
        delete groupByDosisMes["id"]
        let groupByYear = Object.keys(groupByDosisMes).map(key => {
            delete groupByDosisMes[key]["vacuna"]
            const byYear = Object.keys(groupByDosisMes[key]).map(key2 => {
                return groupByDosisMes[key][key2] = {
                    year: key,
                    name: `${getConverMonth(parseInt(key2))}`,
                    uv: groupByDosisMes[key][key2].vacuna
                }

            })
            return byYear
        })
        return groupByYear.flat().sort((a, b) => {
            if (a.year > b.year) {
                return 1;
            }
            if (a.year < b.year) {
                return -1;
            }
            if(months.indexOf(a.name) > months.indexOf(b.name)){
                return 1;
            }
            if(months.indexOf(a.name) < months.indexOf(b.name)){
                return -1;
            }
            return 0;
        })
    }
}