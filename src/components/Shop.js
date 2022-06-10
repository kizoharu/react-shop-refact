import { useContext, useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { ShopContext } from '../context'
import { Alert } from './Alert'
import { BasketList } from './BasketList'
import { Cart } from './Cart'
import { GoodsList } from './GoodsList'
import Preloader from './Preloader'

function Shop() {
    const { loading, order, isBasketShow, alertName, setGoods } =
        useContext(ShopContext)
    const [filteredCatalog, setFilteredCatalog] = useState()

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop)
            })
    }, [])

    return (
        <>
            {/* <Search cb={handleSearch} /> */}
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </>
    )
}

export { Shop }
