import React from 'react'
import PropTypes from 'prop-types'
/**
 * 
 * @param {*} param0 
 * @returns 
 * 
 * Component card vaccine
 */
export const CardDosisAdministradasComponent = ({ total,title, img, loading}) => {


    return (
        <div className="maincard card-fiexWidth-midle">
            <header>
                <img 
                className='header-img'
                src={`${img}.svg`} 
                alt='icono_vacuna' 
                />
                <p className='t-midle'>{ title }</p>
            </header>
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

/**
 * Proptypes
 * To form the card, the title and the total are necessary
 */
CardDosisAdministradasComponent.popTypes= {
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}