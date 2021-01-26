import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./components/location/LocationProvider"
import { LocationList } from "./components/location/LocationList"
import { ProductProvider } from "./components/product/ProductProvider"
import { ProductList } from "./components/product/ProductList"
import { ProductTypeProvider } from "./components/product/ProductTypeProvider"
import { EmployeeProvider } from "./components/employee/EmployeeProvider"
import { EmployeeList} from "./components/employee/EmployeeList"
import { EmployeeForm } from "./components/employee/EmployeeForm"

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
                        
                        <ProductTypeProvider>
                            <ProductList />
                        </ProductTypeProvider>

                    </Route>
                </ProductProvider>
            </LocationProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}