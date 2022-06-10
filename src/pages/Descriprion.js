import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Preloader from '../components/Preloader'
import { ShopContext } from '../context'

function Description(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        displayType,
        // addToBasket = Function.prototype,
    } = props
    // const { loading } = useContext(ShopContext)
    const { goBack } = useHistory()

    return (
        <>
            {/* {loading ? (
                <Preloader />
            ) : ( */}
            <h1>{displayName}</h1>
            <h6>Category: {displayType}</h6>
            <p>{displayDescription}</p>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {/* )} */}
        </>
    )
}

export { Description }
