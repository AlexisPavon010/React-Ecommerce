import React from 'react'
import './Home.css'
import Product from '../Products/Product'

export default function Home() {
    return (
        <div className="home">


            {/* <img className="home__image" src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg" alt="" /> */}


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner home__image">
                    <div class="carousel-item active">
                        <img src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>


            <div className="home__row">
                <Product
                    id="4565229"
                    title="Title asdasdada"
                    price={55}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product
                    id="4565233"
                    title="Title asdasdada"
                    price={411}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="4565234"
                    title="Title asdasdada"
                    price={85}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product
                    id="4565235"
                    title="Title asdasdada"
                    price={120}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product
                    id="4565236"
                    title="Title asdasdada"
                    price={44}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="4565230"
                    title="Title asdasdada"
                    price={55}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product
                    id="4565232"
                    title="Title asdasdada"
                    price={411}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
            </div>
        </div>


    )
}
