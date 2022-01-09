import React from "react";

const NavBar = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Star Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar




