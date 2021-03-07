import React from 'react'

export const CardDosisAdministradasComponent = ({ sumaReduce,title, loading}) => {

    let { total } = sumaReduce;
    
    return (
        <div className="maincard card-fiexWidth-midle">
            <header className="t-midle">{ title }</header>
            {
                !loading
                ?
                <div className="data t-big">{total}</div>
                :
                <div className="spinner p-inline-block"></div>
            }
        </div>
    )
}
