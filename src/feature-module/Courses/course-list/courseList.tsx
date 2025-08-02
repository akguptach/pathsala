import React, { useState } from 'react'
import Breadcrumb from '../../../core/common/Breadcrumb/breadcrumb'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Slider } from 'antd'
import type { SliderSingleProps } from 'antd';
import { all_routes } from '../../router/all_routes'

const CourseList = () => {

  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  const route = all_routes;

  const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value} kms`;
  return (
    <>
      <Breadcrumb title='Course List' />
      <>
        {/* Course */}
        <section className="course-content course-list-content">
          <div className="container">
            <div className="row align-items-baseline">
              <div className="col-lg-3 theiaStickySidebar">
                <div className="filter-clear">
                  <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                    <h5>
                      <i className="feather-filter me-2" />
                      Filters
                    </h5>
                    <Link to="#" className="clear-text">
                      Clear
                    </Link>
                  </div>
                  <div className="accordion accordion-customicon1 accordions-items-seperate">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingcustomicon1One">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1One"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1One"
                        >
                          Filter by Board <i className="fa-solid fa-chevron-down" />
                        </Link>
                      </h2>
                      <div
                        id="collapsecustomicon1One"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1One"
                        data-bs-parent="#accordioncustomicon1Example"
                        style={{}}
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> CISCE
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> CBSC
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> BSEAP
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> DBSC
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked
                              />
                              <span className="checkmark" /> GSEB
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> BSEH
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> JAC
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> MSBHSE
                            </label>
                          </div>
                          <Link to="#" className="see-more-btn">
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingcustomicon1Two">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Two"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Two"
                        >
                          Filter by Medium
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
                      </h2>
                      <div
                        id="collapsecustomicon1Two"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Two"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Telugu
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Hindi
                            </label>
                          </div>
                          <div>
                            <label className="custom_check">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> English
                            </label>
                          </div>
                          <div>
                            <label className="custom_check mb-0">
                              <input
                                type="checkbox"
                                name="select_specialist"
                                defaultChecked
                              />
                              <span className="checkmark" /> Bengali
                            </label>
                          </div>
                          <Link to="#" className="see-more-btn">
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingcustomicon1Three">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Three"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Three"
                        >
                          Filter by Category
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
                      </h2>
                      <div
                        id="collapsecustomicon1Three"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Three"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> Co-ed
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> boys
                            </label>
                          </div>
                          <div>
                            <label className="custom_check custom_one mb-0">
                              <input type="checkbox" name="select_specialist" />
                              <span className="checkmark" /> girls
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingcustomicon1Four">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsecustomicon1Four"
                          aria-expanded="false"
                          aria-controls="collapsecustomicon1Four"
                        >
                          Range
                          <i className="fa-solid fa-chevron-down" />
                        </Link>
                      </h2>
                      <div
                        id="collapsecustomicon1Four"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingcustomicon1Four"
                        data-bs-parent="#accordioncustomicon1Example"
                      >
                        <div className="accordion-body">
                          <div className="filter-range">
                            <Slider range tooltip={{ formatter }} min={0} max={100} defaultValue={[0, 20]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                {/* Filter */}
                <div className="showing-list mb-4">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="show-result text-center text-lg-start">
                        <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="show-filter add-course-info">
                        <form action="#">
                          <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                            <div className="view-icons mb-2 mb-sm-0">
                              {/* <Link to={route.courseGrid} className="grid-view">
                                <i className="feather-grid" />

                              </Link> */}
                              <Link to={route.courseList} className="list-view active">
                                <i className="isax isax-task" />
                              </Link>
                            </div>
                            {/* <select className="form-select">
                              <option>Newly Published </option>
                              <option>Trending Courses</option>
                              <option>Top Rated</option>
                              <option>Free Courses</option>
                            </select> */}
                            <div className=" search-group">
                              <i className="isax isax-search-normal-1" />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Filter */}
                <div className="row course-list-wrap">
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-01.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={1} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[1] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>Pallavi Aware International</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              Beside Aware Global Hospitals, Bairamalguda, Saroornagar
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 4.9
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.8kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-02.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={2} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[2] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>Mega City Grammar High School</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              Plot No 77/A, Gayathri Nagar X Roads, Karmanghat
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 3.8
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.6kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={3} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[3] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>Expert Model High School</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              S V Colony, Karmanghat
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 3.9
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.78kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-04.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={4} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[4] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>KVR Pragathi Grammar High School</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              Jillelaguda, Ambedkar Nagar, Hyderabad
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 3.9
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.93kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-05.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={5} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[5] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                        <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>Sri Mahathi Vidyaapeeth</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              Karmaghat X Road, near Indra‑Nagendra Theatre
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 3.9
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.99kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="courses-list-item">
                      <div className="d-md-flex align-items-center">
                        <div className="position-relative overflow-hidden rounded-3 card-image">
                          <Link to={route.courseDetails}>
                            <ImageWithBasePath
                              className="img-fluid rounded-3"
                              src="./assets/img/course/course-06.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2" key={6} onClick={() => handleItemClick(1)}>
                            <Link to="#" className={`like ${selectedItems[6] ? 'selected' : ''}`}>
                              <i className="isax isax-heart" />
                            </Link>
                          </div>
                        </div>
                         <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm rounded-circle">
                                <Link to="#">
                                  <ImageWithBasePath
                                    className="img-fluid rounded-circle"
                                    src="./assets/img/avatar/avatar1.jpg"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <h6 className="ms-2">
                                <Link to={route.instructorDetails}>Sri Saraswathi High School</Link>
                              </h6>
                            </div>
                            <span>
                              <Link className="tag-btn" to="#">
                                Board
                              </Link>
                            </span>
                          </div>
                          <p className="mt-3 mb-2">
                            <Link to={route.courseDetails}>
                              Shubodaya Colony, Sankaramma Colony
                            </Link>
                          </p>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fa-solid fa-star text-warning me-2" /> 3.9
                            </p>

                          </div>
                          <div className="d-flex justify-content-between mt-3 align-items-center">
                            <h5 className="text-secondary">0.33kms</h5>
                            <Link
                              to={route.courseDetails}
                              className="btn btn-dark btn-sm d-inline-flex align-items-center"
                            >
                              explore school
                              <i className="fs-8 fas fa-angle-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /pagination */}
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <p className="pagination-text">Page 1 of 2</p>
                  </div>
                  <div className="col-md-10">
                    <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                      <li className="page-item prev">
                        <Link
                          className="page-link"
                          to="#"
                          tabIndex={-1}
                        >
                          <i className="fas fa-angle-left" />
                        </Link>
                      </li>
                      <li className="page-item first-page active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item next">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /pagination */}
              </div>
            </div>
          </div>
        </section>
        {/* /Course */}
      </>

    </>
  )
}

export default CourseList
