import React, { useState, useEffect } from 'react'
import './Payment.css'
import { Link, useHistory } from 'react-router-dom';
import { useStateValues } from '../../StateProvider'
import CheckoutProduct from '../CheckOut/CheckoutProduct'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer'
import {db} from '../../firebase'
import axios from '../../axios'



export default function Payment() {

    const history = useHistory();

    const [{ basket, user }, dispatch] = useStateValues();


    const stripe = useStripe()
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')

    const [error, setErorr] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
       
        const getClientSecret = async()=> {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            }) 

            console.log(response)
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    console.log('the secret client  ', clientSecret)


    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
            .collection('users')
            .doc(user?.id)
            .collection('orders')
            .doc(paymentIntent.uid)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true)
            setErorr(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET',
                
            })

            history.replace('/orders')
        })
        
    }

    const handleChange = (event) => {
        setDisabled(event.empyt);
        setErorr(event.error ? event.error.messages : '');
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>CheckOut(<Link to='/checkout'>{basket?.length} items</Link>)</h1>

                <div className="payment__section">
                    <div className="payment__tittle">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__addres">
                        <p>{user?.email}</p>
                        <p>123 React Learn</p>
                        <p>Barrio Bischoff, c31</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__item">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">

                                <CurrencyFormat

                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
