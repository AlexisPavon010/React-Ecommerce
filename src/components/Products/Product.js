import React from 'react'
import './product.css'
import {useStateValues} from '../../StateProvider'

export default function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValues();

    const addToBasket = ()=> {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) =>
                                <p key={i}>✨</p>)
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}
