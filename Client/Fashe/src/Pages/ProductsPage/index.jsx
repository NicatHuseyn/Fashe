import React, { useEffect, useState } from 'react'
import "./index.scss"
import { getAllData } from '../../Services/api'

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllData("products").then((res)=>{
            setProducts(res.data.data)
        })
    }, []);

    console.log(products);

  return (
    <section>
      <div className="container">
        <div className="inner">
            <div className="search">
                <input type="text" placeholder='search products' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Product
