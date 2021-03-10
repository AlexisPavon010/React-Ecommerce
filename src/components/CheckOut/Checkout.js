import React from 'react'
import './Checkout.css'
import { useStateValues } from '../../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'


export default function Checkout() {

    const [{ basket }] = useStateValues();

    return (
        <div className="checkout">
            <div className="left">



                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>
                                You have no items ni your basket. To buy one or
                                "Add to basket" next to the item.
                        </p>
                        </div>
                    ) :
                        <div>
                            <h2 className="checkout__title">Your Shoping Basket</h2>
                            {
                                basket.map((item, i) => (
                                    <CheckoutProduct
                                        key={i}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}

                                    />
                                ))
                            }
                        </div>
                }
            </div>
            
                <div className="checkout__rigth">
                    <Subtotal />
                </div>
          
        </div>

    )
}
