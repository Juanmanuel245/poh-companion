import React from 'react';
import './navbar.css';    

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light background-nav navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Poh companion</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                    {/* <li className="nav-item nav-options"><a className="nav-link active text-white" aria-current="page" href="#">Inicio</a></li>
                    <li className="nav-item nav-options"><a className="nav-link text-white" href="#">Features</a></li> */}
                </ul>
                </div>
            </div>

        </nav>
    )
}
