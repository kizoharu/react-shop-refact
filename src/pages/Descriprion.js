import { useHistory } from 'react-router-dom'


function Description(props) {
    const {
        displayName,
        displayDescription,
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
