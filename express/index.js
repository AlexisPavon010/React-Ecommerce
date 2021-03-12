const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51INkJiEM3QbFTeEej11zcqFmr67Rfm5D7DDievIz0zEXjFZsHvXjLfAFm8klKn1RZRh4Y29PMtb2VmfQI2L4VD0B00GJYdDZi8"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.listen(3000, ()=> console.log('server is running'))

app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/payment", (request, response) => response.status(200).send("hello payment"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  
});

// - Listen command
