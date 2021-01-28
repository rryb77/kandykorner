import React from "react"

export const CustomerCandyCard = ({products}) => (
    <section className="customer__candy">
        <div className="customer__candy__info"><b>Candy:</b> {products?.name}  <b>Price:</b> {products?.price}</div>
    </section>
)