import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        
        <div className="locations">
            {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>
    )
}