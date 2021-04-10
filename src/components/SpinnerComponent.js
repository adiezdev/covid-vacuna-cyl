import React from 'react'
import PropTypes from 'prop-types'
/**
 * 
 * Component Spinner when loading data
 * @returns 
 */
export const SpinnerComponent = ({otherclass = 'p-inline-block'}) => {
    return (
        <div className={`spinner ${otherclass}`} data-testid='loading'>
        </div>
    )
}

SpinnerComponent.propTypes ={
    otherclass: PropTypes.string
}