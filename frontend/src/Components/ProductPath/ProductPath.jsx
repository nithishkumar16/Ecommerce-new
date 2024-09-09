import React from 'react'
import './ProductPath.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const ProductPath = (props) => {
    const { product } = props;
    return (
        <div className="productpath">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default ProductPath