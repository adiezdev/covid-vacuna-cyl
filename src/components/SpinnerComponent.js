import React from 'react'
import PropTypes from 'prop-types'
/**
 * 
 * Component Spinner when loading data
 * @returns 
 */
export const SpinnerComponent = ({otherclass = 'p-inline-block'}) => {
    return (
        <div className={`spinner ${otherclass}`}>
        </div>
    )
}

SpinnerComponent.propTypes ={
    otherclass: PropTypes.string
}