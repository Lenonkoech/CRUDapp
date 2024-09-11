import React, { Component, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById } from '../Services/EmployeeService';
const ViewEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const getEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email }
        if (id) {
            getEmployeeById(id).then((res) => {
                console.log(res.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id]);
    const backToHomePage = () => {
        navigate('/employees')
    }
    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name:  <span> {firstName}</span> </label>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: <span> {lastName}</span></label>
                    </div>
                    <div className="row">
                        <label> Employee Email ID:   <span> {email}</span></label>
                    </div>
                    <button className='btn btn-danger text-center' onClick={() => backToHomePage()}>Exit</button>
                </div>

            </div>
        </div>
    )

}
export default ViewEmployee;