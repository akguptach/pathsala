import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/common/imageWithBasePath';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { all_routes } from '../../../router/all_routes';


const Featuredcourse = () => {

    //Feature Course Slider
    const featurecourseslider = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
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
            {/* featured course */}
            <section className="featured-courses-section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                            Featured Schools
                        </span>
                        <h2>Find the perfect school for your child.</h2>
                        <p>
                           PatashalaKart connects you with the right school and everything you need to know about it.
                        </p>
                    </div>
                    <div className='feature-course-slider-22 top-courses-slider'>
                        <Slider {...featurecourseslider}>
                            
                                <div>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link to={route.courseDetails}>
                                                <ImageWithBasePath
                                                    src="assets/img/course/NurserySchool.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </Link>
                                        </div>
                                        <div className="pb-3 border-bottom mb-3">
                                            <h5>
                                                <Link to={route.courseDetails}>
                                                    Nursery Schools
                                                </Link>
                                            </h5>
                                        </div>
                                        <Link to={route.courseDetails} className="btn buy-course-btn">
                                            Explore Nursery Schools
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link to={route.courseDetails}>
                                                <ImageWithBasePath
                                                    src="assets/img/schools/DayBoardingSchool.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </Link>
                                        </div>
                                        
                                        <div className="pb-3 border-bottom mb-3">
                                            <h5>
                                                <Link to={route.courseDetails}>
                                                    Day Borading Schools
                                                </Link>
                                            </h5>
                                        </div>
                                       
                                        <Link to={route.courseDetails} className="btn buy-course-btn">
                                           Explore Day Borading Schools
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link to={route.courseDetails}>
                                                <ImageWithBasePath
                                                    src="assets/img/schools/BoardingSchools.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />
                                            </Link>
                                           
                                        </div>
                                    
                                        <div className="pb-3 border-bottom mb-3">
                                            <h5>
                                                <Link to={route.courseDetails}>
                                                    Boarding Schools
                                                </Link>
                                            </h5>
                                        </div>
                                        <Link to={route.courseDetails} className="btn buy-course-btn">
                                            Explore Bording Schools
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link to={route.courseDetails}>
                                                <ImageWithBasePath
                                                    src="assets/img/schools/DaySchools.jpg"
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
                                        <Link to={route.courseDetails} className="btn buy-course-btn">
                                            Explore Day Schools
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="course-item">
                                        <div className="course-img">
                                            <Link to={route.courseDetails2}>
                                                <ImageWithBasePath
                                                    src="assets/img/schools/EnglishMedium0.jpg"
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
                                      
                                        <Link to={route.courseDetails} className="btn buy-course-btn">
                                            Explore English Medium Schools
                                        </Link>
                                    </div>
                                </div>
                        </Slider>


                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Link to={route.courseList} className="btn btn-primary btn-md">
                            View All Schools
                        </Link>
                    </div>
                </div>
            </section>
            {/* /featured course */}
        </>


    )
}

export default Featuredcourse
