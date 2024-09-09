import { updateEmployee, createEmployee, getEmployeeById } from "../Services/EmployeeService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email }
        if (id) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigate(`/employees`);
            }).catch(error => {
                console.log(error)
            })
        } else {
            createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate(`/employees`);
            }).catch(error => {
                console.log(error)
            })
        }
    };

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

    const pageTitle = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    function cancel() {
        navigate('/employees')
    }

    const isFormComplete = firstName && lastName && email;
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" type="email" className="form-control"
                                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <button className="btn btn-success" disabled={!isFormComplete} type="submit" onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default CreateEmployee;