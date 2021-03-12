import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../CheckOut/CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer'
import { useStateValues } from '../../StateProvider'


export default function Order({ order }) {

    const [{basket},] = useStateValues()


    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.creted).format("MMMM do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>
                    {order.id}
                </small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}

            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <h3>Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                hideButton
            />

        </div>
    )
}
