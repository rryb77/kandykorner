import React, { useState, createContext } from "react"

export const CustomerCandyContext = createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandies, setCustomerCandies] = useState([])

    const getCustomerCandies = () => {
        return fetch("http://localhost:8088/kandyOrders")
        .then(res => res.json())
        .then(setCustomerCandies)
    }

    const addCustomerCandy = customerCandyObj => {
        return fetch("http://localhost:8088/kandyOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerCandyObj)
        })
        .then(getCustomerCandies)
    }

    return (
        <CustomerCandyContext.Provider value={{
            customerCandies, getCustomerCandies, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}