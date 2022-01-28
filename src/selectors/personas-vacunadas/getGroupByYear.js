export const getGroupByYear = (records) => {
    const groupByDosisYear = records?.reduce((group, data) => {
        const { dosis_administradas, fecha } = data.fields
        const [year] = fecha.split('-')
        group[year] = group[year] || { vacuna: 0 }
        group[year].vacuna += dosis_administradas

        return group;
    });
    if (groupByDosisYear) {
        delete groupByDosisYear["fields"]
        delete groupByDosisYear["type"]
        delete groupByDosisYear["id"]
        const groupByYear = Object.keys(groupByDosisYear).map(key => {
            return groupByDosisYear[key] = {
                name: key,
                uv: groupByDosisYear[key].vacuna
            }
        })
        return groupByYear;
    }
}
