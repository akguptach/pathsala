import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'

const Footer = () => {
  return (
    <footer className="footer footer-one">
  <div className="footer-top">
    <div className="container">
      <div className="row row-gap-4">
        <div className="col-lg-4">
          <div className="footer-about">
            <div className="footer-logo">
              <ImageWithBasePath src="assets/img/logo-white.svg" alt="" />
            </div>
            <p>
              Platform designed to help organizations, educators, and learners
              manage, deliver, and track learning and training activities.
            </p>
            <div className="d-flex align-items-center">
              <Link to="#" className="me-2">
                <ImageWithBasePath src="assets/img/icon/appstore.svg" alt="" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icon/googleplay.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">UseFul Links</h5>
                <ul>
                  <li>
                    <Link to={all_routes.courseGrid}>Explore Schools</Link>
                  </li>
                  <li>
                    <Link to={all_routes.addNewCourse}>Add Schools</Link>
                  </li>
                  <li>
                    <Link to="#">Compare Schools</Link>
                  </li>
                  <li>
                    <Link to={all_routes.pricingPlan}>Add Resources</Link>
                  </li>
                  <li>
                    <Link to={all_routes.blogGrid}>Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">About</h5>
                <ul>
                  <li>
                    <Link to={all_routes.courseCategory}>About Us</Link>
                  </li>
                  <li>
                    <Link to={all_routes.courseList}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={all_routes.about_us}>News</Link>
                  </li>
                  <li>
                    <Link to={all_routes.FAQ}>Blogs</Link>
                  </li>
                  <li>
                    <Link to={all_routes.contactUs}>Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Information</h5>
                <ul>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">Admissions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-widget footer-contact">
            <h5 className="footer-title">Subscribe Newsletter</h5>
            <div className="footer-newsletter">
              <p>Sign up to get updates &amp; news.</p>
              <form action="#">
                <div className="subscribe-form">
                  <span>
                    <i className="isax isax-message-text" />
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary btn-xl w-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row row-gap-2">
        <div className="col-lg-5">
          <div className="text-center text-lg-start">
            <p>
              Copyright 2025 © <span className="text-secondary">DreamsLMS</span>
              . All right reserved.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="d-flex align-items-center justify-content-center footer-link">
            <li>
              <Link to={all_routes.termsConditions}>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to={all_routes.privacyPolicy}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <div className="social-icon">
            <Link to="#">
              <i className="fa-brands fa-facebook-f" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-x-twitter" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-youtube" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer