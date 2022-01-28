import PropTypes from 'prop-types'
import { SpinnerComponent } from '../SpinnerComponent'
import { useIncrement } from '../../hooks/useIncrement'
/**
 * 
 * Component forming the card
 */
export const CardDosisAdministradasComponent = ({ total = 0 ,title, img, loading}) => {

    const {count} = useIncrement(total)

    return (
        <div className="maincard card-fiexWidth-midle">
            <header>
                <img 
                className='header-img'
                src={img} 
                alt='icono_vacuna' 
                />
                <p className='t-midle'>{ title }</p>
            </header>
            {
                !loading
                ?
                <div className="data t-big">{count}</div>
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