import React from 'react';
import { Link } from 'react-router-dom';

function Headermain() {
    const headerStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: 'green', // Add your desired background color
        zIndex: 1000, // Adjust the z-index as needed
    };

    return (
        <>
            <section id="header" className="cd-secondary-nav" style={headerStyle}>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-default">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target="#dropdown-thumbnail-preview"
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <Link to="/" className="navbar-brand">
                                    <img src="/assets/img/takipizzaslogo%20(1).jpg" alt="logo" />
                                    <span className="logo-txt"  style={{ color: 'white' }}>Taki's Pizza</span>
                                </Link>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div
                                className="collapse navbar-collapse"
                                id="dropdown-thumbnail-preview"
                            >
                                <ul className="nav navbar-nav" >
                                    <li className="active">
                                        <Link to="/"  className="hvr-underline-from-center">
                                            HOME
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about"  className="hvr-underline-from-center">
                                            ABOUT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery" className="hvr-underline-from-center">
                                            GALLERY
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/contact" className="hvr-underline-from-center">
                                            CONTACT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Headermain;
