import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getProducts")
    getCustomers()

  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
       <h4>Customers:</h4>
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer}/>
        })
      }
    </div>
  )
}