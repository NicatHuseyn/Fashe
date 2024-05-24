import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { NavLink } from "react-router-dom";



import { Col, Divider, Row } from 'antd';
import { Pagination } from 'swiper/modules';
import { getAllData } from '../../Services/api';

import { Card } from 'antd';
const { Meta } = Card;

const Home = () => {

  const style = {
    // background: '#0092ff',
    // padding: '8px 0',
  };

  //  call api

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllData("products").then((res) => {
      setProducts(res.data.data)
    })
  }, [])



  return (
    <>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className='slide-1 slide'>
            <div className="container">
              <div className="slide-inner">
                <p>Women collection 2024</p>
                <h1>NEW ARRIVALS</h1>
                <button>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide-2 slide'>
            <div className="container">
              <div className="slide-inner">
                <p>Women collection 2024</p>
                <h1>NEW ARRIVALS</h1>
                <button>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide-3 slide'>
            <div className="container">
              <div className="slide-inner">
                <p>Women collection 2024</p>
                <h1>NEW ARRIVALS</h1>
                <button>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="cloth">
        <div className="container">
          <div className="cloth-inner">
            <Row style={{ gap: "20px 0" }}
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={8} lg={8} xs={24}>
                <div style={style}>
                  <img src="https://preview.colorlib.com/theme/fashe/images/banner-02.jpg" alt="" />
                  <button>SHOP-NOW</button>
                </div>
              </Col>
              <Col className="gutter-row" span={8} xs={24} lg={8}>
                <div style={style}>
                  <img src="https://preview.colorlib.com/theme/fashe/images/banner-03.jpg" alt="" />
                  <button>SHOP-NOW</button>

                </div>
              </Col>
              <Col className="gutter-row" span={8} xs={24} lg={8}>
                <div style={style}>
                  <img src="https://preview.colorlib.com/theme/fashe/images/banner-04.jpg" alt="" />
                  <button>SHOP-NOW</button>

                </div>
              </Col>
              <Col className="gutter-row" span={8} xs={24} lg={8}>
                <div style={style}>
                  <img src="https://preview.colorlib.com/theme/fashe/images/banner-05.jpg" alt="" />
                  <button>SHOP-NOW</button>

                </div>
              </Col>
              <Col className="gutter-row" span={8} xs={24} lg={8}>
                <div style={style}>
                  <img src="https://preview.colorlib.com/theme/fashe/images/banner-07.jpg" alt="" />
                  <button>SHOP-NOW</button>

                </div>
              </Col>
              <Col className="gutter-row" span={8} xs={24} lg={8}>
                <div style={style}>
                  <h1>SIGN UP & GET 20% OFF</h1>
                  <p>Be the frist to know about the latest fashion news and get exclu-sive offers</p>
                  <button className='sign'>SIGN UP</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="product-inner">

            <div className="title">
              <h1>FEATURED PRODUCTS</h1>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products && products.map((p) => {
                return (
                  <SwiperSlide className='product-slide' key={p._id}>
                    <Card
                      hoverable
                      style={{
                        width: "100%"
                      }}
                      cover={<img alt="image fon found" src={p.image} style={{ height: "350px" }} />}
                    >
                      {p.isNew ? <span>new</span> : null}
                      <NavLink to={`/products/${p._id}`}>{p.title}</NavLink>
                      <p>{p.price}$</p>

                      <button>ADD TO CARD</button>


                    </Card>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="select-products">
        <div className="container">
          <div className="select-inner">
            <div className="box box-1">
              <p>The Beauty</p>
              <h1>LOOKBOOK</h1>
              <NavLink>VIEW COLLECTION</NavLink>
            </div>
            <div className="box box-2">
              <img src="https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg" alt="" />
              {/* <p>Gafas sol Hawkers one</p>
              <strong>$29.50 <span>$15.90</span></strong> */}
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="blog-inner">
          <div className="title">
              <h1>OUR BLOG</h1>
            </div>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={8} lg={8} xs={24}>
                <div style={style}>
                  <div className="img">
                    <img src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg" alt="" />
                  </div>
                  <div className="txt">
                    <NavLink>Black Friday Guide: Best Sales & Discount Codes</NavLink>
                    <i>By Nancy Ward on July 22, 2017</i>
                    <p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={8} lg={8} xs={24}>
                <div style={style}>
                  <div className="img">
                    <img src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg" alt="" />
                  </div>
                  <div className="txt">
                    <NavLink>Black Friday Guide: Best Sales & Discount Codes</NavLink>
                    <i>By Nancy Ward on July 22, 2017</i>
                    <p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames</p>
                  </div>
                </div>
              </Col>

              <Col className="gutter-row" span={8} lg={8} xs={24}>
                <div style={style}>
                  <div className="img">
                    <img src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg" alt="" />
                  </div>
                  <div className="txt">
                    <NavLink>Black Friday Guide: Best Sales & Discount Codes</NavLink>
                    <i>By Nancy Ward on July 22, 2017</i>
                    <p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames</p>
                  </div>
                </div>
              </Col>
              
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
