import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValues } from '../../StateProvider'
import { getBasketTotal } from '../../reducer'
import { useHistory } from 'react-router-dom'




export default function Subtotal() {

    const history = useHistory()

    const [{ basket, dispatch }] = useStateValues()

    return (
        <div className="subtotal">
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.lentgh} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contain
                    </small>
                    </>
                )}

                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button onClick={e => history.push('/payment')} >Proced to Checkout</button>
        </div>
    )
}
