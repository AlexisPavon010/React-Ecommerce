import React from 'react'
import "./Header.css"
import Search from '../../img/loupe.png'
import Basket from '../../img/shopping-cart.png'
import { useStateValues } from '../../StateProvider'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'



export default function Header() {

    const [{basket, user}, dispatch] = useStateValues();

    const login = ()=> {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="Header">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" className="header__logo" alt="" />
            </Link>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <img src={Search} alt="" className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to={!user && '/login' } className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user? user.email : 'Qzi'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>


                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <img src={Basket} alt=""/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>

                </Link>


            </div>


        </nav>
    )
}
