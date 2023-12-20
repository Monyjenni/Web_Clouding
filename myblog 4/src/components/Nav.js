import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from './Provider';

const Mycontext = React.createContext();

const Nav = ({ setLang }) => {

    const onSetLang = langKey => setLang(langKey);

    return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about-us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => onSetLang('en')}>EN</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link px-lg-3 py-3 py-lg-4 text-white" onClick={() => onSetLang('kh')}>KH</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default  Nav;
