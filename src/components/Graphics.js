import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { useFetch } from '../hooks/useFetch';
import { groupByMesPv } from '../selectors/personas-vacunadas/getGroupByMesPv';
import { groupByMesVr } from '../selectors/vacunas-recibidas/groupByMesVr';
import { SpinnerComponent } from './SpinnerComponent';


export const Graphics = () => {
    const { data: personasvacunadasproprovincia, isLogin } = useFetch('personas-vacunadas-covid', 5000)
    const { data: totalProgresivoVacunas, isLogin: isLogin2 } = useFetch('vacunas-recibidas-covid', 10000)

    const personaspormes = groupByMesPv(personasvacunadasproprovincia)
    const vacunasrecibidaspormes = groupByMesVr(totalProgresivoVacunas)

    const llistdatas = [
        {
            title: 'Progreso de dosis administradas',
            data: personaspormes,
        },
        {
            title: 'Progreso de vacunas recibidas',
            data: vacunasrecibidaspormes,
        }];



    return (
        //grap 
        <div className='center-item-wrap-grap'>
            {!isLogin || !isLogin2 ?
            llistdatas.map((item) => {
                return (
                    <>
                        <div className='center-item-wrap-v'>
                            <h1 className='t-center t-big'>{item.title}</h1>
                            <div style={{ width: '100%', height: 300 }} >
                                <ResponsiveContainer>
                                    <AreaChart

                                        width={500}
                                        height={400}
                                        data={item.data}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 35,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip labelStyle={{ color: "#000" }} />
                                        <Area type="monotone" dataKey="uv" stroke="rgb(54, 115, 16)" fill="rgb(80, 160, 29)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </>)
            }): <SpinnerComponent/>}
        </div>
    )
}
