import { Component } from "react";
import "../App.css";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <div className="navbar-brand">Employee Management App</div>
                    </nav>
                </header>
            </div >
        )
    }
}
export default HeaderComponent;