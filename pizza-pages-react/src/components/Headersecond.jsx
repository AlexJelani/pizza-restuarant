import React from 'react'

function Headersecond() {
    return (
        <>
            <section id="header_main" className="clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 space_all">
                            <div className="col-sm-4 space_all">
                                <div className="header_main_1">
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone" />
                                            <a href="#">+123 456 78 90</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            <a href="#">info@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 space_all">
                                <div className="header_main_2">
                                    <div id="custom-search-input">
                                        <div className="input-group col-md-12">
                                            <input
                                                type="text"
                                                className="  search-query form-control"
                                                placeholder="Search"
                                            />
                                            <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">
                    <span className=" glyphicon glyphicon-search" />
                  </button>
                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 space_all">
                                <div className="header_main_3">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facbook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-youtube" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Headersecond