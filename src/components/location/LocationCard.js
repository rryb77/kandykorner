import React from "react"
import "./Location.css"

export const LocationCard = ({location}) => (

    <section className="location">
        <h3 className="location__name"><b>Location:</b> {location.id}</h3>
        <div className="location__address"><b>Address:</b> {location.address}</div>
        <div className="location__footage"><b>Square Feet:</b> {location.squareft}</div>
        <div className="location__handicap"><b>Handicap Accessible:</b> {location.handicap}</div>
        {console.log(location.handicap)}
    </section>
)