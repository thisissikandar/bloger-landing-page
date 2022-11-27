import React from 'react'
import "./Navbar.css"
import img from "../images/logo.svg"
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-none container">
            <div className="container-fluid ">
                <img src={img} alt="logo.svg" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ms-5">
                        <li className="nav-item ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Overview</a></li>
                                    <li><a className="dropdown-item" href="#">Pricing</a></li>
                                    <li><a className="dropdown-item" href="#">Marketplace</a></li>
                                    <li><a className="dropdown-item" href="#">Features</a></li>
                                    <li><a className="dropdown-item" href="#">Integrations</a></li>
                                </ul>
                            </li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">About</a></li>
                                    <li><a className="dropdown-item" href="#">Team</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Careers</a></li>
                                </ul>
                            </li>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Connect
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Contact</a></li>
                                <li><a className="dropdown-item" href="#">Newsletter</a></li>
                                <li><a className="dropdown-item" href="#">LinkedIn</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-success m-3" type="submit">Search</button>
                        <button className="btn btn-outline-success m-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
