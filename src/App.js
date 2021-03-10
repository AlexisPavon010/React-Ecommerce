import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import Checkout from './components/CheckOut/Checkout';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders'
import { useStateValues } from './StateProvider';
import { auth } from './firebase';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe('pk_test_51INkJiEM3QbFTeEejhsfDL7R4Y0oH2hJs4IWFtk7B1FQctIJWuma1HjVXhM2hpx2wY9pEgQSMLNsfUjrb7PVGWYS00K98mh1B4')


function App() {

  const [{ user }, distpatch] = useStateValues();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        distpatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        distpatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }

  }, [])

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
