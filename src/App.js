import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="container">
                            <nav
                                className="navbar navbar-expand-lg navbar-dark bg-dark"
                                data-bs-theme="dark"
                            >
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">
                                        Pizza House
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    aria-current="page"
                                                    href="#"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                        <form className="d-flex" role="search">
                                            <input
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <button
                                                className="btn btn-danger"
                                                type="submit"
                                            >
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mb-5">
                    <div className="row">
                        <div
                            id="carouselExampleCaptions"
                            class="carousel slide"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="3"
                                    aria-label="Slide 4"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="4"
                                    aria-label="Slide 5"
                                ></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src="./assets/pizza1.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Neapolitan Piza</h5>
                                        <p>
                                            If you are looking for a traditional Italian pizza, the Neapolitan is best option
                                        </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="./assets/pizza2.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="./assets/pizza3.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="./assets/pizza4.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="./assets/pizza5.jpg"
                                        class="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mb-5">
                    <div className="container">
                        <div className="row">
                            <h2> Our Menu </h2>
                            <div className="col-md-3 mb-2">
                                <div className="card">
                                    <img
                                        src="./assets/menu1.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Margherita Pizza
                                        </h5>
                                        <p className="card-text"><del>$40.00</del> <span style={{ color:"#FFD700"}}>$24.00</span></p>
                                        <a
                                            href="#"
                                            class="form-control btn btn-dark"
                                        >
                                            Buy
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-2">
                                <div className="card">
                                    <img
                                        src="./assets/menu2.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Mushroom Pizza
                                        </h5>
                                        <p className="card-text">$25.00</p>
                                        <a
                                            href="#"
                                            class="form-control btn btn-dark"
                                        >
                                            Buy
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-2">
                                <div className="card">
                                    <img
                                        src="./assets/menu3.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Hawaiian Pizza
                                        </h5>
                                        <p className="card-text">$30.00</p>
                                        <a
                                            href="#"
                                            class="form-control btn btn-dark"
                                        >
                                            Buy
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-2">
                                <div className="card">
                                    <img
                                        src="./assets/menu4.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div class="card-body">
                                        <h5 className="card-title">Pesto Pizza</h5>
                                        <p className="card-text"><del>$50.00</del> <span style={{ color:"#FFD700"}}>$30.00</span></p>
                                        <a
                                            href="#"
                                            class="form-control btn btn-dark"
                                        >
                                            Buy
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"> Book Your Table</h2>
                            <div class="row mb-3">
                                <div className="col">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Your Name"
                                        aria-label="Your Name"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Your Email"
                                        aria-label="Your Email"
                                    />
                                </div>
                                <div className="col">
                                    <select id="inputState" class="form-select">
                                        <option selected>
                                            Select a Service
                                        </option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        placeholder="Please write your comment"
                                        aria-label="Please write your comment"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <input
                                        type="submit"
                                        className="btn btn-warning"
                                        value="Send Message"
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
