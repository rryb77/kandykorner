import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./components/location/LocationProvider"
import { LocationList } from "./components/location/LocationList"
import { ProductProvider } from "./components/product/ProductProvider"
import { ProductList } from "./components/product/ProductList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
                <ProductProvider>
                    <Route path="/locations">
                        <LocationList />
                        <ProductList />
                    </Route>
                </ProductProvider>
            </LocationProvider>
        </>
    )
}