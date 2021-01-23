import React from "react"
import "./Product.css"

export const ProductCard = ({product}) => (

    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price"><b>Price:</b> ${product.price}</div>
        <div className="product__type"><b>Category:</b> {product.productTypeId}</div>
    </section>
    
)