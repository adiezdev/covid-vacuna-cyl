import React from 'react'
import PropTypes from 'prop-types'
import { SpinnerComponent } from '../SpinnerComponent'
/**
 * 
 * Component forming the card
 */
export const CardDosisAdministradasComponent = ({ total = 0,title, img, loading}) => {


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
                <SpinnerComponent></SpinnerComponent>
            }
        </div>
    )
}

/**
 * Proptypes
 * To form the card, the title and the total are necessary
 */
CardDosisAdministradasComponent.propTypes= {
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}