(this["webpackJsonpreact-firebase-tienda"]=this["webpackJsonpreact-firebase-tienda"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},75:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(44),i=c.n(n),r=(c(53),c(7)),o=(c(54),c(13)),d=c(9),j=(c(55),c.p+"static/media/loupe.1d92f967.png"),l=c(2),m=Object(a.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(l.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},h=function(){return Object(a.useContext)(m)},b=c(33),p=b.a.initializeApp({apiKey:"AIzaSyB15BLgqXC6wgLfzeFtHw-7B84jcdB8pR8",authDomain:"tienda-react-717ce.firebaseapp.com",projectId:"tienda-react-717ce",storageBucket:"tienda-react-717ce.appspot.com",messagingSenderId:"903566159411",appId:"1:903566159411:web:3433e8d24ea596ee553d46"}).firestore(),O=b.a.auth();function x(){var e=h(),t=Object(r.a)(e,2),c=t[0],a=c.basket,s=c.user;t[1];return Object(l.jsxs)("nav",{className:"Header",children:[Object(l.jsx)(o.b,{to:"/React-Ecommerce/",children:Object(l.jsx)("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",className:"header__logo",alt:""})}),Object(l.jsxs)("div",{className:"header__search",children:[Object(l.jsx)("input",{type:"text",className:"header__searchInput"}),Object(l.jsx)("img",{src:j,alt:"",className:"header__searchIcon"})]}),Object(l.jsxs)("div",{className:"header__nav",children:[Object(l.jsx)(o.b,{to:!s&&"/React-Ecommerce/login",className:"header__link",children:Object(l.jsxs)("div",{onClick:function(){s&&O.signOut()},className:"header__option",children:[Object(l.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Qzi"]}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(l.jsx)(o.b,{to:"/React-Ecommerce/orders",className:"header__link",children:Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(l.jsx)(o.b,{to:"/React-Ecommerce/login",className:"header__link",children:Object(l.jsxs)("div",{className:"header__option",children:[Object(l.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(l.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(l.jsx)(o.b,{to:"/React-Ecommerce/checkout",className:"header__link",children:Object(l.jsxs)("div",{className:"header__optionBasket",children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAg8FJC/0DH2zAAABS0lEQVQ4y72Rv0tCcRTFP18zRQgJgtaWdIvWaunHYk4tDUFDW7hEQzQ1FI02RpR/QmMQSAg1ujU0BBlOES2FliBZvncapMf74Xs2dafv93DOufeei+71W4f8oYxyTACwxpiZHiyIm6veQ+JUc3QG8J+dl6b0l3oxjiBGg3NKkf5ntFw/VXQZxVZKbe3GXEiVGZkIxSIpym6HvKRsRIdjPXkMNSpbGxGCR5XANZJpUmM2lJ5hkrJHAFTDBeT55sbvsilL6ZAOZV0DxD3oLTG2VOvDN8yz7/cY0UPEjTu9BN0dcmRZ4C5kh45p+wV1xDa1EMGHiqYLnsuqQIE0BjuwgaHJkmkEs1hRS7aKHmxdbXW11z+8uio6kpRxEKNXXehElsbBfziwSJBEWM40wmaYJAoMCqBlvelLBx5sVe/61E5IGBpSMoDFleDf6gfHu9RCxaOKyAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMi0xNVQwNTozNjo0NyswMDowMFrBh7cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDItMTVUMDU6MzY6NDcrMDA6MDArnD8LAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:""}),Object(l.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})}c(64),c(65);function _(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=h(),o=Object(r.a)(i,2),d=(o[0].basket,o[1]);return Object(l.jsxs)("div",{className:"product",children:[Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)("p",{children:c}),Object(l.jsxs)("p",{className:"product__",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(l.jsx)("p",{children:"\u2728"},t)}))})]}),Object(l.jsx)("img",{src:a,alt:""}),Object(l.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:n}})},children:"Add to Basket"})]},t)}function g(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("img",{className:"home__image",src:"https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg",alt:""}),Object(l.jsxs)("div",{className:"home__row",children:[Object(l.jsx)(_,{id:"4565229",title:"Title asdasdada",price:55,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"}),Object(l.jsx)(_,{id:"4565233",title:"Title asdasdada",price:411,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"})]}),Object(l.jsxs)("div",{className:"home__row",children:[Object(l.jsx)(_,{id:"4565234",title:"Title asdasdada",price:85,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"}),Object(l.jsx)(_,{id:"4565235",title:"Title asdasdada",price:120,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"}),Object(l.jsx)(_,{id:"4565236",title:"Title asdasdada",price:44,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"})]}),Object(l.jsxs)("div",{className:"home__row",children:[Object(l.jsx)(_,{id:"4565230",title:"Title asdasdada",price:55,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"}),Object(l.jsx)(_,{id:"4565232",title:"Title asdasdada",price:411,rating:5,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"})]})]})}c(66),c(67);function A(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=e.hideButton,o=h(),d=Object(r.a)(o,2),j=(d[0].basket,d[1]);return Object(l.jsxs)("div",{className:"checkoutProduct",children:[Object(l.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(l.jsxs)("div",{className:"checkoutProduct__info",children:[Object(l.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(l.jsxs)("p",{className:"checkoutProduct__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(l.jsx)("p",{children:"\u2728"},t)}))}),!i&&Object(l.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})}c(68);var f=c(22),v=c.n(f),N=c(34),E=c(17),k=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},y=function(e,t){switch(t.type){case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(N.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(N.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return a>=0?c.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not a basket")),Object(E.a)(Object(E.a)({},e),{},{basket:c});default:return e}};function S(){var e=Object(d.f)(),t=h(),c=Object(r.a)(t,1)[0],a=c.basket;c.dispatch;return Object(l.jsxs)("div",{className:"subtotal",children:[Object(l.jsx)(v.a,{renderText:function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["subtotal (",a.lentgh," items): ",Object(l.jsx)("strong",{children:"".concat(e)})]}),Object(l.jsxs)("small",{className:"subtotal__gift",children:[Object(l.jsx)("input",{type:"checkbox"}),"This order contain"]})]})},value:k(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(l.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proced to Checkout"})]})}function B(){var e=h(),t=Object(r.a)(e,1)[0].basket;return Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("img",{className:"checkout__add",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Your Shopping Basket is empty"}),Object(l.jsx)("p",{children:'You have no items ni your basket. To buy one or "Add to basket" next to the item.'})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"checkout__title",children:"Your Shoping Basket"}),t.map((function(e,t){return Object(l.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating},t)}))]})]}),Object(l.jsx)("div",{className:"checkout__rigth",children:Object(l.jsx)(S,{})})]})}c(70);function C(){var e=Object(d.f)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),j=Object(r.a)(i,2),m=j[0],u=j[1];return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)(o.b,{to:"/React-Ecommerce/",children:Object(l.jsx)("img",{className:"login__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG24.png",alt:""})}),Object(l.jsxs)("div",{className:"login__container",children:[Object(l.jsx)("h1",{children:"Singn in"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"email"}),Object(l.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},type:"text"}),Object(l.jsx)("h5",{children:"password"}),Object(l.jsx)("input",{name:"password",onChange:function(e){return u(e.target.value)},type:"password"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),O.signInWithEmailAndPassword(s,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__singInButton",children:"Sign In"})]}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit a. Eveniet natus, aperiam architecto ab dicta animi ratione voluptas fugiat? Impedit maiores ipsam minus distinctio obcaecati soluta labore porro exercitationem adipisci aliquid."}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),O.createUserWithEmailAndPassword(s,m).then((function(){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__singInRegister",children:"Create Your Amazon Acount"})]})]})}c(71),c(72);var R=c(46),T=c.n(R);function D(e){var t,c=e.order,a=h();Object(r.a)(a,1)[0].basket;return Object(l.jsxs)("div",{className:"order",children:[Object(l.jsx)("h2",{children:"Order"}),Object(l.jsx)("p",{children:T.a.unix(c.data.creted).format("MMMM do YYYY, h:mma")}),Object(l.jsx)("p",{className:"order__id",children:Object(l.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(l.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating},e.id)})),Object(l.jsx)(v.a,{renderText:function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("h3",{children:["Order Total: ",e]})})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$",hideButton:!0})]})}function M(){var e=h(),t=Object(r.a)(e,2),c=t[0],s=(c.basket,c.user),n=(t[1],Object(a.useState)([])),i=Object(r.a)(n,2),o=i[0],d=i[1];return Object(a.useEffect)((function(){s?p.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[]),Object(l.jsxs)("div",{className:"orders",children:[Object(l.jsx)("h1",{children:"Your Orders"}),Object(l.jsx)("div",{className:"oders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(l.jsx)(D,{order:e})}))})]})}var w=c(24),F=c.n(w),z=c(32),I=(c(75),c(20)),G=c(47),Y=c.n(G).a.create({baseURL:"https://serverconexpress-alexispavon010.vercel.app/"});function P(){var e=Object(d.f)(),t=h(),c=Object(r.a)(t,2),s=c[0],n=s.basket,i=s.user,j=c[1],m=Object(I.useStripe)(),u=Object(I.useElements)(),b=Object(a.useState)(!1),O=Object(r.a)(b,2),x=O[0],_=O[1],g=Object(a.useState)(""),f=Object(r.a)(g,2),N=f[0],E=f[1],y=Object(a.useState)(null),S=Object(r.a)(y,2),B=S[0],C=S[1],R=Object(a.useState)(!0),T=Object(r.a)(R,2),D=T[0],M=T[1],w=Object(a.useState)(!0),G=Object(r.a)(w,2),P=G[0],Q=G[1];Object(a.useEffect)((function(){(function(){var e=Object(z.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({method:"post",url:"/payments/create?total=".concat(100*k(n))});case 2:t=e.sent,console.log(t),Q(t.data.clientSecret);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log("the secret client  ",P);var J=function(){var t=Object(z.a)(F.a.mark((function t(c){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),E(!0),t.next=4,m.confirmCardPayment(P,{payment_method:{card:u.getElement(I.CardElement)}}).then((function(t){var c=t.paymentIntent;p.collection("users").doc(null===i||void 0===i?void 0:i.id).collection("orders").doc(c.uid).set({basket:n,amount:c.amount,created:c.created}),_(!0),C(null),E(!1),j({type:"EMPTY_BASKET"}),e.replace("/React-Ecommerce/orders")}));case 4:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"payment",children:Object(l.jsxs)("div",{className:"payment__container",children:[Object(l.jsxs)("h1",{children:["CheckOut(",Object(l.jsxs)(o.b,{to:"/React-Ecommerce/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__tittle",children:Object(l.jsx)("h3",{children:"Delivery Address"})}),Object(l.jsxs)("div",{className:"payment__addres",children:[Object(l.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(l.jsx)("p",{children:"123 React Learn"}),Object(l.jsx)("p",{children:"Barrio Bischoff, c31"})]})]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Review items and delivery"})}),Object(l.jsx)("div",{className:"payment__item",children:n.map((function(e){return Object(l.jsx)(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating},e.id)}))})]}),Object(l.jsxs)("div",{className:"payment__section",children:[Object(l.jsx)("div",{className:"payment__title",children:Object(l.jsx)("h3",{children:"Payment Method"})}),Object(l.jsx)("div",{className:"payment__details",children:Object(l.jsxs)("form",{onSubmit:J,children:[Object(l.jsx)(I.CardElement,{onChange:function(e){M(e.empyt),C(e.error?e.error.messages:"")}}),Object(l.jsxs)("div",{className:"payment__priceContainer",children:[Object(l.jsx)(v.a,{renderText:function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("h3",{children:["Order Total: ",e]})})},decimalScale:2,value:k(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(l.jsx)("button",{disabled:N||D||x,children:Object(l.jsx)("span",{children:N?Object(l.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),B&&Object(l.jsx)("div",{children:B})]})})]})]})})}var Q=c(48),J=Object(Q.a)("pk_test_51INkJiEM3QbFTeEejhsfDL7R4Y0oH2hJs4IWFtk7B1FQctIJWuma1HjVXhM2hpx2wY9pEgQSMLNsfUjrb7PVGWYS00K98mh1B4");var U=function(){var e=h(),t=Object(r.a)(e,2),c=t[0].user,s=t[1];return Object(a.useEffect)((function(){var e=O.onAuthStateChanged((function(e){s(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log(c),Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d.c,{children:[Object(l.jsxs)(d.a,{path:"/React-Ecommerce/Checkout",children:[Object(l.jsx)(x,{}),Object(l.jsx)(B,{})]}),Object(l.jsxs)(d.a,{path:"/React-Ecommerce/payment",children:[Object(l.jsx)(x,{}),Object(l.jsx)(I.Elements,{stripe:J,children:Object(l.jsx)(P,{})})]}),Object(l.jsx)(d.a,{path:"/React-Ecommerce/login",children:Object(l.jsx)(C,{})}),Object(l.jsxs)(d.a,{path:"/React-Ecommerce/orders",children:[Object(l.jsx)(x,{}),Object(l.jsx)(M,{})]}),Object(l.jsxs)(d.a,{path:"/",children:[Object(l.jsx)(x,{}),Object(l.jsx)(g,{})]})]})})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{initialState:{basket:[],user:null},reducer:y,children:Object(l.jsx)(U,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.7db63f7d.chunk.js.map