import { useContext } from 'react'
import { ShopContext } from '../context'

function BasketItem(props) {
    const {
        mainId,
        displayName,
        finalPrice,
        quantity,
        // removeFromBasket = Function.prototype,
        // incQuantity = Function.prototype,
        // decQuantity = Function.prototype,
    } = props

    // const finalPrice = price.finalPrice
    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext)
    // console.log('example - ', example)

    return (
        <li className='collection-item'>
            {displayName}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>{' '}
            = {finalPrice * quantity} руб.
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(mainId)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    )
}

export { BasketItem }
