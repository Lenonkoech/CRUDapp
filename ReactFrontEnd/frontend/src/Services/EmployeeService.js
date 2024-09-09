import axios from 'axios';

const Employee_Api_Base_Url = "http://localhost:8080/api/v1/employees";


export const getEmployees = () => {
    return axios.get(Employee_Api_Base_Url);
}
export const createEmployee = (employee) => {
    return axios.post(Employee_Api_Base_Url, employee);
}
export const updateEmployee = (employeeId, employee) => {
    return axios.put(Employee_Api_Base_Url + '/' + employeeId, employee);
}
export const getEmployeeById = (employeeId) => {
    return axios.get(Employee_Api_Base_Url + '/' + employeeId);
}
export const deleteEmployee = (employeeId) => {
    return axios.delete(Employee_Api_Base_Url + '/' + employeeId);
}
