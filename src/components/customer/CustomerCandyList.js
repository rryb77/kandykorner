import React, { useContext, useEffect } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { CustomerCandyCard } from "./CustomerCandyCard"
import { ProductContext } from '../product/ProductProvider'
import { CustomerContext } from "./CustomerProvider"

export const CustomerCandyList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { customerCandies, getCustomerCandies } = useContext(CustomerCandyContext)
  const { products, getProducts } = useContext(ProductContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getCustomerCandies()
      .then(getProducts)
      .then(getCustomers)

  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="customers">
      {console.log("CustomerCandyList: Render", customerCandies)}
      <h4>Your Order:</h4>
      {
        customerCandies.map(customer => {
          // const matchingCustomer = customers.find(c => c.id === customer.userId)
          const customerProducts = products.find(p => p.id === customer.productId)
          // console.log(matchingType.type)
          return <CustomerCandyCard key={customer.id} products={customerProducts}/>
        })
      }
    </div>
  )
}