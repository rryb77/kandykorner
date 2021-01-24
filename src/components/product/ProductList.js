import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import { ProductTypeContext } from './ProductTypeProvider'
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProducts()
      .then(getProductTypes)

  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="products">
      {console.log("ProductList: Render", products)}

      {
        products.map(product => {
          // const matchingType = productTypes.find(p => p.id === product.id)
          // console.log(matchingType)
          return <ProductCard key={product.id} product={product} />
        })
      }
    </div>
  )
}