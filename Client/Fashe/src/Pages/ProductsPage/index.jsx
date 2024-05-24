import React, { useEffect, useState } from 'react'
import "./index.scss"
import { getAllData } from '../../Services/api'
import { Card, Col, Divider, Row } from 'antd';
import { NavLink } from 'react-router-dom';

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllData("products").then((res) => {
            setProducts(res.data.data)
        })
    }, []);

    console.log(products);

    const style = {
        // background: '#0092ff',
        // padding: '8px 0',
    };

    function handleProduct(value) {
        setProducts(products.filter((p)=>p.title.toLowerCase().includes(value.toLowerCase().trim())))
    }

    return (
        <section>
            <div className="container">
                <div className="inner">
                    <div className="search">
                        <input onChange={(e)=>{handleProduct(e.target.value)}} type="text" placeholder='search products' />
                    </div>

                    <div className="products">
                        <Row style={{gap:"20px"}}
                            gutter={{
                                xs: 8,
                                sm: 16,
                                md: 24,
                                lg: 32,
                            }}
                        >
                            {products && products.map((p) => {
                                return (
                                    <Col className='product-slide' key={p._id}>
                                        <Card
                                            hoverable
                                            style={{
                                                width: "100%"
                                            }}
                                            cover={<img alt="image fon found" src={p.image} style={{ height: "350px" }} />}
                                        >
                                            <NavLink to={`/products/${p._id}`}>{p.title}</NavLink>
                                            <p>{p.price}$</p>

                                            <button>ADD TO CARD</button>


                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
