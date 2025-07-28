import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { all_routes } from '../../../router/all_routes';
import studentImage from "../../../../style/images/schoolchildren.jpg"
const BannerSection = () => {
    const route = all_routes;
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const Path = route.courseList;
        navigate(Path);
    };

    return (
        <>
            {/* banner */}
            <section className="banner-section">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        {/* Left: Text Content */}
                        <div className="col-xl-6 col-lg-6 order-1 order-lg-1">
                            <div className="banner-content pe-xxl-5">
                                <span className="hero-title">PatashalaKart is Path to success</span>
                                <h1 className="mb-4 text-white">
                                    One click is all it takes to find the right <span>Schools</span> for your child!
                                </h1>
                                <p className="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">
                                    Take the first step toward your child’s success — find the best school today!
                                </p>

                                {/* Search Form */}
                                <form onSubmit={handleSubmit} className="banner-search d-flex align-items-center gap-2 flex-wrap">
                                    <div className="dropdown">
                                        <Link
                                            className="hero-dropdown"
                                            to="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Select Category
                                        </Link>
                                        <ul className="dropdown-menu p-1">
                                            <li><Link className="dropdown-item" to="#">Private Schools</Link></li>
                                            <li><Link className="dropdown-item" to="#">Government Schools</Link></li>
                                            <li><Link className="dropdown-item" to="#">International Schools</Link></li>
                                            <li><Link className="dropdown-item" to="#">Play Schools / Childcare Centers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="text-primary mb-0 fw-medium">Find Schools Near Me</p>
                                    </div>
                                    <button className="btn btn-primary ms-2 px-5 py-2">Search</button>

                                </form>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="col-xl-6 col-lg-6 order-2 order-lg-2 mt-4 mt-lg-0 position-relative text-center">
                            <img
                                src={studentImage}
                                alt="Students"
                                className="img-fluid rounded-4 shadow"
                                style={{ width: "100%", maxWidth: "500px", height: "400px", objectFit: "cover" }}
                            />

                            {/* Quote Box */}
                            <div
                                className="position-absolute bg-white shadow rounded p-3 text-start"
                                style={{ bottom: "20px", left: "20px", width: "280px" }}
                            >
                                <div
                                    className="position-absolute bg-warning rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        top: "-20px",
                                        left: "-20px",
                                        width: "50px",
                                        height: "50px",
                                    }}
                                >
                                    <i className="bi bi-bell fs-4 text-white"></i>
                                </div>
                                <p className="mb-1 text-muted" style={{ fontSize: "0.95rem" }}>
                                    The dreams of the young minds are the foundation of the future of our nation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default BannerSection
