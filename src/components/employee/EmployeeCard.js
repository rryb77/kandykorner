import React, {useContext} from "react"
import "./Employee.css"
import { EmployeeContext } from './EmployeeProvider'
import { useHistory } from 'react-router-dom';

export const EmployeeCard = ({employee, location}) => {
    
    const { releaseEmployee } = useContext(EmployeeContext)

    const history = useHistory()

    const handleFiring = () => {
        releaseEmployee(employee.id)
          .then(() => {
            history.push("/employees")
          })
    }


    return (
    <section className="employee">
        <h3 className="employee__name">{employee?.name}</h3>
        <div className="employee__location">{location?.name}</div>
        <address className="employee__address">{location?.address}</address>
        <button onClick={handleFiring}>Fire Employee</button>
    </section>
    )
}
