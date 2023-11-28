import React from 'react'
import {Link, NavLink} from "react-router-dom";

function Headermain() {
    return (
        <>
            <section id="header" className="cd-secondary-nav">
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
                                <Link to='/' className="navbar-brand" >
                                    <img src="/assets/img/takipizzaslogo%20(1).jpg" alt="logo" />
                                    <span className="logo-txt">Taki's Pizza</span>
                                </Link>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div
                                className="collapse navbar-collapse"
                                id="dropdown-thumbnail-preview"
                            >
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <a href="index.html" className="hvr-underline-from-center">
                                            HOME
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="hvr-underline-from-center">
                                            ABOUT
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html" className="hvr-underline-from-center">
                                            GALLERY
                                        </a>
                                    </li>

                                    <li>
                                        <a href="contact.html" className="hvr-underline-from-center">
                                            CONTACT
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}
                        </nav>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Headermain