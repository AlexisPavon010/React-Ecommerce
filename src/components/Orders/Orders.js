import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from '../../firebase'
import { useStateValues } from '../../StateProvider'
import Order from '../Orders/Order'
 

export default function Orders() {
    const [{basket, user}, distpatch ] = useStateValues()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        
        if (user) {

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })   

        } 
        else {
            setOrders([])

        }
    }, [])


    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="oders__order">
                {orders?.map(order => (<Order order={order} />))}
            </div>
        </div>
    )
}
