import { useState } from "react"
import useSWR from "swr"
import { getVacunasCyL } from "../helpers/getVacunasCyL"



export const useFetch = (datset, rows, provincia) => {
    const endpoint = getVacunasCyL(datset, rows, provincia)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const usefetching = useSWR(endpoint, fetcher)

    const data = usefetching.data?.records?.map(record => {
        return {
            fields: record.fields,
            type: record.datasetid,
            id: record.recordid,
        }
    })
    if (!data) { return { data: null, isLogin: true } }

    return {
        data: data,
        error: null,
        isLogin: false
    }
}