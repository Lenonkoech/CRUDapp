import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployee';
import ViewEmployeeComponent from './Components/ViewEmployee';
import CreateEmployee from './Components/CreateEmployee';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListEmployeeComponent />}></Route>
                        <Route path="/employees" element={<ListEmployeeComponent />}></Route>
                        <Route path="/add-Employee" element={<CreateEmployeeComponent />}></Route>
                        <Route path="/view-Employee/:id" element={<ViewEmployeeComponent />}></Route>
                        <Route path="/update-Employee/:id" element={<CreateEmployeeComponent />}></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;