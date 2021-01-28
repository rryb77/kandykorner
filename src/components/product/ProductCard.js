import React, {useContext} from "react"
import "./Product.css"
import { CustomerCandyContext } from "../customer/CustomerCandyProvider"


export const ProductCard = ({product, type}) => {
    
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    const SaveCandy = () => {
        
        const candy = {
            userId: parseInt(localStorage.getItem("kandy_customer", "value")),
            productId: parseInt(product.id)
        }
        addCustomerCandy(candy)
    }

    
    return (

        <section className="product">
            <h3 className="product__name">{product.name}</h3>
            <div className="product__price"><b>Price:</b> ${product.price}</div>
            <div className="product__type"><b>Category:</b> {product.productType.type}</div>
            {/* <div className="product__type"><b>Category:</b> {type.type}</div> */}
            <button onClick={SaveCandy}>Add Candy</button>
        </section>
    
    )
}

