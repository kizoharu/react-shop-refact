import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context'

function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
        displayType,
        // addToBasket = Function.prototype,
    } = props

    const { addToBasket } = useContext(ShopContext)

    const finalPrice = price.finalPrice
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>

                <span className='right'>{displayType}</span>
            </div>
            <div className='card-action'>
                <Link to={`/goods/${mainId}`} className='btn'>
                    Подробнее
                </Link>
                <button
                    className='btn right'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            finalPrice,
                        })
                    }
                >
                    Купить
                </button>

                <span className='right' style={{ fontSize: '1.2rem' }}>
                    {finalPrice} руб.
                </span>
            </div>
        </div>
    )
}

export { GoodsItem }
