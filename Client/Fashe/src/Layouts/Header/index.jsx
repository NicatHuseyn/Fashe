import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="top-inner">
            <ul>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaPinterestP /></a></li>
              <li><a href="#"><FaSnapchatGhost /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>

            <p><a href="mailto:fashe@example.com">fashe@example.com</a></p>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="bottom-inner">
            <NavLink>
              <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="" />
            </NavLink>

            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink>Shop</NavLink></li>
                <li><NavLink>Sale</NavLink></li>
                <li><NavLink>Features</NavLink></li>
                <li><NavLink>Blog</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/add-products">Add Product</NavLink></li>
              </ul>
            </nav>

            <div className="basket">
              <NavLink><FaRegUser /></NavLink>
              <NavLink><MdOutlineShoppingBag /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
