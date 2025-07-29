import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/common/imageWithBasePath'

const Faq = () => {
  return (
    <>
    {/* faq */}
    <div className="faq-section faq-banner-bg">
      <ImageWithBasePath
        src="assets/img/bg/bg-21.svg"
        alt="img"
        className="d-lg-flex d-none faq-bg2"
      />
      <ImageWithBasePath
        src="assets/img/bg/bg-22.svg"
        alt="img"
        className="d-lg-flex d-none faq-bg3"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img" data-aos="fade-up">
              <ImageWithBasePath
                className="img-fluid rounded-5"
                src="assets/img/feature/feature-4.jpg"
                alt="img"
              />
              <span>
                <i className="isax isax-message-question5" />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-header" data-aos="fade-up">
                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                  Your Questions are Answered
                </span>
                <h2 className="mb-1">Frequently Asked Questions</h2>
                <p>
                  Explore detailed answers to the most common questions about our
                  platform.
                </p>
              </div>
              <div
                className="accordion accordion-customicon1 accordions-items-seperate"
                id="accordioncustomicon1Example"
              >
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="headingcustomicon1One">
                   <Link
                      to="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1One"
                      aria-expanded="true"
                      aria-controls="collapsecustomicon1One"
                    >
                       How do I apply to a school?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1One"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingcustomicon1One"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                       You can apply by selecting a school, reviewing its details, and submitting the application through our portal or by visiting the school’s official website via the provided link.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <h2 className="accordion-header" id="headingcustomicon1Two">
                   <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Two"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      Can I apply to multiple schools at once?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1Two"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Two"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                     Yes, you can shortlist and apply to multiple schools. We recommend applying early to secure admission in your preferred institutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <h2 className="accordion-header" id="headingcustomicon1Three">
                   <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Three"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      What types of schools are listed here?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1Three"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Three"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                       We list Private, Government, International, CBSE, ICSE, and Play Schools across various cities.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <h2 className="accordion-header" id="headingcustomicon1Four">
                   <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Four"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      Is there a fee to use the platform?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1Four"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Four"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                       No, our platform is free for parents and guardians to explore and apply to schools.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <h2 className="accordion-header" id="headingcustomicon1Five">
                   <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Five"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      Will I get confirmation from the school?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1Five"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Five"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                    Yes, once your application is submitted, the school will contact you directly through the details you provided.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-delay={250}
                >
                  <h2 className="accordion-header" id="headingcustomicon1Six">
                   <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsecustomicon1Six"
                      aria-expanded="false"
                      aria-controls="collapsecustomicon1One"
                    >
                      How do I know if admissions are open?{" "}
                      <i className="isax isax-add fs-20 fw-semibold ms-1" />
                    </Link>
                  </h2>
                  <div
                    id="collapsecustomicon1Six"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingcustomicon1Six"
                    data-bs-parent="#accordioncustomicon1Example"
                  >
                    <div className="accordion-body pt-0">
                      <p>
                      Schools with “Admissions Open” badges indicate that they’re currently accepting applications for the upcoming academic year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* faq */}
  </>
  
  )
}

export default Faq
