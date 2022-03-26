import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand text-center fw-bold fs-3" >
                                <img src="https://logos.textgiraffe.com/logos/logo-name/Dexter-designstyle-cartoon-m.png" alt="" width="100" height="70" className="d-inline-block me-2 mb-2"></img>
                                Dexter Shop
                            </a>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;