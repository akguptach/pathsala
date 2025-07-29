import React from 'react'
import ImageWithBasePath from '../../../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes'

const Community = () => {
    const route = all_routes;
    return (
        <>
            {/* community-to-learn */}
            <section className="community-to-learn">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-header">
                                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                                    Quality Education for Every Child
                                </span>
                                <h2> Quality Education for Every Child</h2>
                                <p>
                                    We're committed to helping parents discover the best learning environment by providing a wide range of schools that cater to every child's needs and potential.
                                </p>
                            </div>
                            <div className="community-item d-flex align-items-center">
                                <span className="community-icon-1">
                                    <i className="isax isax-book-saved5" />
                                </span>
                                <div>
                                    <h5 className="mb-2">Explore Schools Anywhere</h5>
                                    <p className="mb-0">
                                        Find and compare schools across cities or within your neighborhood — all from one platform.
                                    </p>
                                </div>
                            </div>
                            <div className="community-item d-flex align-items-center">
                                <span className="community-icon-2">
                                    <i className="isax isax-bookmark5" />
                                </span>
                                <div>
                                    <h5 className="mb-2">Trusted Educators</h5>
                                    <p className="mb-0">
                                       Browse schools with highly qualified teachers and staff committed to your child’s academic and personal growth.
                                    </p>
                                </div>
                            </div>
                            <div className="community-item d-flex align-items-center">
                                <span className="community-icon-3">
                                    <i className="isax isax-chart-26" />
                                </span>
                                <div>
                                    <h5 className="mb-2">Focus on Future Skills</h5>
                                    <p className="mb-0">
                                      Select institutions that go beyond textbooks — offering life skills, extracurriculars, and digital learning opportunities for holistic development.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <Link to={route.login} className="btn btn-secondary btn-md">
                                    Enroll as Student
                                </Link>
                                <Link to={route.becomeAnInstructor} className="btn btn-dark btn-md">
                                    Apply as Tutor
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="community-img d-none d-lg-flex">
                                <ImageWithBasePath
                                    src="assets/img/shapes/shape-5.png"
                                    alt="img"
                                    className="img-fluid community-img-01"
                                />
                                <ImageWithBasePath
                                    src="assets/img/shapes/shape-6.png"
                                    alt="img"
                                    className="img-fluid community-img-02"
                                />
                                <ImageWithBasePath
                                    src="assets/img/feature/feature-2.jpg"
                                    alt="img"
                                    className="img-fluid community-img-03"
                                />
                                <ImageWithBasePath
                                    src="assets/img/feature/feature-3.jpg"
                                    alt="img"
                                    className="img-fluid community-img-04"
                                />
                                <ImageWithBasePath
                                    src="assets/img/shapes/shape-7.svg"
                                    alt="img"
                                    className="img-fluid community-img-05"
                                />
                                <div className="community-count p-2">
                                    <div className="enrolled-list">
                                        <div className="avatar-list-stacked mb-2">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/user/user-01.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/user/user-03.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/user/user-07.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/user/user-08.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath src="assets/img/user/user-06.jpg" alt="img" />
                                            </span>
                                        </div>
                                        <p className="mb-0">
                                            <span className="text-secondary">35K+</span> Students Enrolled
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /community-to-learn */}
        </>

    )
}

export default Community
