import React from 'react'
import { useFormik } from 'formik';
import "./index.scss"
import { createProduct } from '../../Services/api';

const AddPage = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      price: 0,
      isNew:false
    },
    onSubmit: values => {
      createProduct("products",values).then((res)=>{
        console.log(res.data);
      });
    },
  });

  return (
    <section className='add'>
      <div className="container">
        <div className="add-inner">
          <form className='form' onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
            <input className='my-input'
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder='Enter title...'
            />
            <label htmlFor="image">Image</label>
            <input className='my-input'
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.image}
              placeholder='Enter image...'
            />
            <label htmlFor="price">Price</label>
            <input className='my-input'
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              placeholder='Enter price...'
            />

            <label htmlFor="price">New Product</label>
            <input className='my-input'
              id="isNew"
              name="isNew"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.isNew}
              placeholder='Enter new or old...'
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddPage
