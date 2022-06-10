import { useContext } from 'react'
import { ShopContext } from '../context'

function Cart(props) {
    const {
        // quantity = 0,
        order = 0,
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext)

    const quantity = order.length

    return (
        <div
            className='cart purple lighten-3 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    )
}

export { Cart }
