function Centersection() {

    return (
        <section id="center" className="clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="center_1">
                            <h5>Consectetur Adipiscing</h5>
                            <h3>
                                Fusce <a href="#">Lacinia Nostra</a>
                            </h3>
                            <p>
                                Sed cursus ante dapibus diam. Sed nisi. Nulla quis nibh elementum
                                imperdiet. Duis sagittis ipsum.{" "}
                            </p>
                        </div>
                        <div className="center_2">
                            <ul>
                                <li>
                                    <a href="#" className="btn">
                                        Load More
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn">
                                        Book Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="center_3">
                            <div
                                id="carousel-example-generic"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                {/* Indicators */}
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carousel-example-generic"
                                        data-slide-to={0}
                                        className=""
                                    />
                                    <li
                                        data-target="#carousel-example-generic"
                                        data-slide-to={1}
                                        className="active"
                                    />
                                    <li
                                        data-target="#carousel-example-generic"
                                        data-slide-to={2}
                                        className=""
                                    />
                                </ol>
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    <div className="item">
                                        <img src="/assets/img/takipizza1-removebg.png" alt="abc" />
                                        {/*780X570*/}
                                    </div>
                                    <div className="item active">
                                        <img src="/assets/img/takipizza2-removebg.png" alt="abc" />
                                    </div>
                                    <div className="item">
                                        <img src="/assets/img/takipizza3-removebg.png" alt="abc" />
                                    </div>
                                </div>
                                {/* Controls */}
                                <a
                                    className="left carousel-control"
                                    href="http://bootsnipp-env.elasticbeanstalk.com/iframe/xBdN#carousel-example-generic"
                                    data-slide="prev"
                                >
                                    <span className="glyphicon glyphicon-chevron-left" />
                                </a>
                                <a
                                    className="right carousel-control"
                                    href="http://bootsnipp-env.elasticbeanstalk.com/iframe/xBdN#carousel-example-generic"
                                    data-slide="next"
                                >
                                    <span className="glyphicon glyphicon-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Centersection