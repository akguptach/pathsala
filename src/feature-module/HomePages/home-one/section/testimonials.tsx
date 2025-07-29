import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/common/imageWithBasePath';
import { all_routes } from '../../../router/all_routes';
import { Link } from 'react-router-dom';

const Testimonials = () => {

    //Testimonial Slider
    const testimonialslider = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const route = all_routes;

    return (
        <>
            {/* testimonials */}
            <section className="featured-courses-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                            Featured Tutors
                        </span>
                        <h2>Find the ideal tutor to guide your child’s learning journey.</h2>
                        <p>
                            PatashalaKart connects you with experienced tutors and all the essential details you need to make the right choice.
                        </p>
                    </div>
                    <div className='feature-course-slider-22 top-courses-slider'>
                        <Slider {...testimonialslider}>

                            <div>
                                <div className="course-item">
                                    <div className="course-img">
                                        <Link to={route.courseDetails}>
                                            <ImageWithBasePath
                                                src="assets/img/tutors/tutor1.jpg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pb-3 border-bottom mb-3">
                                        <h5>
                                            <Link to={route.courseDetails}>
                                                Aaradhya Sharma
                                            </Link>
                                        </h5>
                                    </div>
                                    <p className="text-muted">
                                        Find expert tutors specialized in early childhood education to help your child grow with the right guidance and care.
                                    </p>
                                </div>

                            </div>
                            <div>
                                <div className="course-item">
                                    <div className="course-img">
                                        <Link to={route.courseDetails}>
                                            <ImageWithBasePath
                                                 src="assets/img/tutors/tutor2.jpg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>

                                    <div className="pb-3 border-bottom mb-3">
                                        <h5>
                                            <Link to={route.courseDetails}>
                                               Ravi Kumar 
                                            </Link>
                                        </h5>
                                    </div>

                                      <p className="text-muted">
                                        Find expert tutors specialized in early childhood education to help your child grow with the right guidance and care.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="course-item">
                                    <div className="course-img">
                                        <Link to={route.courseDetails}>
                                            <ImageWithBasePath
                                              src="assets/img/tutors/tutor4.jpg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </Link>

                                    </div>

                                    <div className="pb-3 border-bottom mb-3">
                                        <h5>
                                            <Link to={route.courseDetails}>
                                                Kunal Das
                                            </Link>
                                        </h5>
                                    </div>
                                      <p className="text-muted">
                                        Find expert tutors specialized in early childhood education to help your child grow with the right guidance and care.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="course-item">
                                    <div className="course-img">
                                        <Link to={route.courseDetails}>
                                            <ImageWithBasePath
                                               src="assets/img/tutors/tutor3.jpg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </Link>
                                    </div>
                                    <div className="pb-3 border-bottom mb-3">
                                        <h5>
                                            <Link to={route.courseDetails}>
                                                Day Schools
                                            </Link>
                                        </h5>
                                    </div>
                                     <p className="text-muted">
                                        Find expert tutors specialized in early childhood education to help your child grow with the right guidance and care.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="course-item">
                                    <div className="course-img">
                                        <Link to={route.courseDetails2}>
                                            <ImageWithBasePath
                                                src="assets/img/tutors/tutor1.jpg"
                                                alt="img"
                                                className="img-fluid"
                                            />
                                        </Link>

                                    </div>

                                    <div className="pb-3 border-bottom mb-3">
                                        <h5>
                                            <Link to={route.courseDetails2}>
                                                English Medium Schools
                                            </Link>
                                        </h5>
                                    </div>

                                     <p className="text-muted">
                                        Find expert tutors specialized in early childhood education to help your child grow with the right guidance and care.
                                    </p>
                                </div>
                            </div>
                        </Slider>


                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Link to={route.courseList} className="btn btn-primary btn-md">
                            View All Tutors
                        </Link>
                    </div>
                </div>
            </section>
            {/* testimonials */}
        </>

    )
}

export default Testimonials
