const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51INkJiEM3QbFTeEej11zcqFmr67Rfm5D7DDievIz0zEXjFZsHvXjLfAFm8klKn1RZRh4Y29PMtb2VmfQI2L4VD0B00GJYdDZi8')

// Api

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response)=> response.status(200).send(('Hello Friend <3')))

app.post('/payments/create', async(request, response)=> {
    const total = request.query.total;
   console.log('Payment Request Recevide Boom!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });
    console.log(paymentIntent)
    response.status(201).json({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command

exports.api = functions.https.onRequest(app)
    
