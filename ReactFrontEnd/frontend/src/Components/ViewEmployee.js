import React, { Component, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById } from '../Services/EmployeeService';
const ViewEmployee = () => {
    const [employee, setEmployees] = useState([]);
    const getEmployee = (id) => {
        getEmployeeById().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {employee.email}</div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default ViewEmployee;