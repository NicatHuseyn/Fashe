import React, { useEffect, useState } from 'react'

import "./index.scss"
import { getDataById } from '../../Services/api'
import { useParams } from "react-router-dom";


const Detail = () => {

    
    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDataById("products",id).then((res)=>{
            setProduct(res.data.data)
        })
    }, [])

    console.log(product);

  return (
    <section>
      <div className="container">
        <div className="detail">
            <div className="image">
                <img src={product.image} alt="" />
            </div>

            <div className="product-detail">
                <span>
                    <p>Title:</p>
                    <i>{product.title}</i>
                </span>
                <span>
                    <p>Price:</p>
                    <i>{product.price}$</i>
                </span>
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
