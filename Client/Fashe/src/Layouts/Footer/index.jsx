import React from 'react'
import "./index.scss"

import { Col, Divider, Row } from 'antd';
import { NavLink } from "react-router-dom";

const Footer = () => {

    const style = {
        // background: '#0092ff',
        // padding: '8px 0',
    };
    return (
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <div className="description">
                        <h3>GET IN TOUCH</h3>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>

                    </div>
                    <Row className='row'
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col className="gutter-row" span={6} lg={6} xs={24}>
                            <div style={style}>
                                <h4>CATEGORIES</h4>
                                <ul>
                                    <li><NavLink>Men</NavLink></li>
                                    <li><NavLink>Women</NavLink></li>
                                    <li><NavLink>Dresses</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6} lg={6} xs={24}>
                            <div style={style}>
                                <h4>LINKS</h4>
                                <ul>
                                    <li><NavLink>Track order</NavLink></li>
                                    <li><NavLink>Returns</NavLink></li>
                                    <li><NavLink>Shopping</NavLink></li>
                                    <li><NavLink>FAQs</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6} lg={6} xs={24}>
                            <div style={style}>
                                <h4>HELP</h4>
                                <ul>
                                    <li><NavLink>Search</NavLink></li>
                                    <li><NavLink>About Us</NavLink></li>
                                    <li><NavLink>Contact Us</NavLink></li>
                                    <li><NavLink>Returns</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6} lg={6} xs={24}>
                            <div style={style}>
                                <h4>NEWSLETTER</h4>

                                <input type="text" placeholder='enter your email...' />

                                <button>SUBSCRIBE</button>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="foot">
                    <div className="container">
                        <div className="end-text">
                            <span>
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/paypal.png" alt="" />
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/visa.png" alt="" />
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/mastercard.png" alt="" />
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/express.png" alt="" />
                                <img src="https://preview.colorlib.com/theme/fashe/images/icons/discover.png" alt="" />
                            </span>
                            <p>Copyright © 2024 Colorlib. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
