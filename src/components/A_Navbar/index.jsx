import React from 'react'
import "./style.css"
import icons from '../../icons_8.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return <>

        <div className='top_notice_in_blue_background'>
            <div className='max_width'>
                <p>Notice: All class will be remain close...</p>
                <div className='singup_right_side'>
                    {/* <div> */}
                    <p>Login</p>
                    <span>|</span>
                    <p>Register</p>
                    <span>|</span>
                    <img src="https://assets.website-files.com/59e98418f9cd070001c89d5a/59f74d0deac5ea0001c20e42_zoom-icon.svg" alt="" />
                    {/* </div> */}
                    <div className='shopping_cart_logo'>
                        <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649274769d9c387565201021_cart-icon.svg" alt="" />
                        <p>Cart</p>
                        <span>-</span>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>

        {/* navbar section */}

        <div className="nav_white">
            <nav className="navbar_container">
                <div>
                    <img src="https://assets.website-files.com/649189cd213c45a9d650f194/649274769d9c387565201023_logo.png" alt="" />
                </div>
                <div className="menu_box">
                    <input type="checkbox" id="svg" />
                    <ul className="menu">
                        <li><Link className='li_none' to={`/`}>home</Link></li>
                        <li>pages</li>
                        <div class="dropdown">
                            <li class="dropbtn">Courses</li>
                            <div class="dropdown-content">
                                <li >
                                    <Link className='li_none' to={`/Course_1`}>Course 1</Link>
                                </li>
                                <li className='pad_bot'>
                                    <Link className='li_none' to={`/Course_2`}>Course 2</Link>
                                </li>
                                <li className='pad_bot'>
                                    <Link className='li_none' to={`/Course_3`}>Course 3</Link>
                                </li>
                                <div className='green_patti'></div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <li class="dropbtn">Shop</li>
                            <div class="dropdown-content">
                                <li >
                                    <Link className='li_none' to={`/Shop_1`}>Shop 1</Link>
                                </li>
                                <li className='pad_bot'>
                                    <Link className='li_none' to={`/Shop_2`}>Shop 2</Link>
                                </li>
                                <div className='green_patti'></div>
                            </div>
                        </div>

                        <li>utility pages</li>
                        <li><Link className='li_none' to={`/blog`}>blog</Link></li>
                    </ul>
                    <label htmlFor="svg" className="label_1">
                        <img src={icons} alt="logo" />
                    </label>
                </div>
            </nav>
        </div>


    </>

}

export default Navbar