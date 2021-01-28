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
import { CustomerCandyProvider } from "./components/customer/CustomerCandyProvider"
import { CustomerCandyList } from "./components/customer/CustomerCandyList"
import { CustomerProvider} from "./components/customer/CustomerProvider"
import { CustomerList } from "./components/customer/CustomerList"

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
                            <CustomerCandyProvider>
                                <ProductList />
                            </CustomerCandyProvider>
                        </ProductTypeProvider>

                    </Route>
                </ProductProvider>
            </LocationProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <CustomerCandyProvider>
                <CustomerProvider>
                    <ProductProvider>
                        <Route path="/orders">
                            <CustomerCandyList />
                        </Route>
                    </ProductProvider>
                </CustomerProvider>
            </CustomerCandyProvider>

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