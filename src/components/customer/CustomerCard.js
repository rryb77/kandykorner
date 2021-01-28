import React from "react"

export const CustomerCard = ({customer}) => (
    <section className="customer__list">
        <div className="customer__name">{customer?.name}</div>
    </section>
)