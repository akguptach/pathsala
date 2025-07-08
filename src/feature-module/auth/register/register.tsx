import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Slider from "react-slick";
import { all_routes } from "../../router/all_routes";
import { CiMobile3 } from "react-icons/ci";


const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [showOtpField, setShowOtpField] = useState(false);
  const route = all_routes;
  const navigate = useNavigate();
  const loginSLider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // autoplay: true, // Uncomment if needed
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);

    // Show OTP field only if a valid number is entered
    if (value.length >= 10) {
      setShowOtpField(true);
    } else {
      setShowOtpField(false);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically focus the next input box if value is entered
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Combine OTP digits into a single string

    const formData = {
      name,
      email,
      mobileNumber,
      otp: otpValue,
    };

    console.log("Form Submitted:", formData);

    // You can add additional logic here, such as sending the data to an API
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="login-content">
          <div className="row">
            <div className="col-md-6 login-bg d-none d-lg-flex">
              <Slider {...loginSLider} className="login-carousel">
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Welcome to <br />
                        Dreams<span className="text-secondary">LMS</span>{" "}
                        Courses.
                      </h3>
                      <p>
                        Platform designed to help organizations, educators, and
                        learners manage, deliver, and track learning and
                        training activities.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Welcome to <br />
                        Dreams<span className="text-secondary">LMS</span>{" "}
                        Courses.
                      </h3>
                      <p>
                        Platform designed to help organizations, educators, and
                        learners manage, deliver, and track learning and
                        training activities.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <ImageWithBasePath
                        src="assets/img/auth/auth-1.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Welcome to <br />
                        Dreams<span className="text-secondary">LMS</span>{" "}
                        Courses.
                      </h3>
                      <p>
                        Platform designed to help organizations, educators, and
                        learners manage, deliver, and track learning and
                        training activities.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="col-md-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between login-header">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                      <Link to={route.homeone} className="link-1">
                        Back to Home
                      </Link>
                    </div>
                    <h1 className="fs-32 fw-bold topic">Sign up</h1>
                    {/* <form onSubmit={handleSubmit} className="mb-3 pb-3">
                      <div className="mb-3 position-relative">
                        <label className="form-label">
                          Full Name<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <span>
                            <i className="isax isax-user input-icon text-gray-7 fs-14" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 position-relative">
                        <label className="form-label">
                          Email<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                          />
                          <span>
                            <i className="isax isax-sms input-icon text-gray-7 fs-14" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 position-relative">
                        <label className="form-label">
                          Mobile Number<span className="text-danger ms-1">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type="number"
                            className="form-control form-control-lg"
                          />
                          <span className="input-icon text-gray-7 fs-14">
                            <CiMobile3  />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="remember-me d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label mb-0 d-inline-flex remember-me fs-14"
                            htmlFor="flexCheckDefault"
                          >
                            I agree with{" "}
                            <Link to={route.termsConditions} className="link-2 mx-2">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to={route.privacyPolicy} className="link-2 mx-2">
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-secondary btn-lg"
                          type="submit"
                        >
                          Sign Up <i className="isax isax-arrow-right-3 ms-1" />
                        </button>
                      </div>
                    </form> */}
                  <form onSubmit={handleSubmit} className="mb-3 pb-3">
      <div className="mb-3 position-relative">
        <label className="form-label">
          Full Name<span className="text-danger ms-1">*</span>
        </label>
        <div className="position-relative">
          <input
            type="text"
            className="form-control form-control-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>
            <i className="isax isax-user input-icon text-gray-7 fs-14" />
          </span>
        </div>
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">
          Email<span className="text-danger ms-1">*</span>
        </label>
        <div className="position-relative">
          <input
            type="email"
            className="form-control form-control-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            <i className="isax isax-sms input-icon text-gray-7 fs-14" />
          </span>
        </div>
      </div>

      <div className="mb-3 position-relative">
        <label className="form-label">
          Mobile Number<span className="text-danger ms-1">*</span>
        </label>
        <div className="position-relative">
          <input
            type="number"
            className="form-control form-control-lg"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          <span className="input-icon text-gray-7 fs-14">
            <CiMobile3 />
          </span>
        </div>
      </div>

      {showOtpField && (
        <div className="mb-3">
          <label className="form-label">
            Enter OTP<span className="text-danger ms-1">*</span>
          </label>
          <div className="d-flex gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                className="form-control text-center otp-box"
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="remember-me d-flex align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label
            className="form-check-label mb-0 d-inline-flex remember-me fs-14"
            htmlFor="flexCheckDefault"
          >
            I agree with{" "}
            <Link to="/terms-conditions" className="link-2 mx-2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="link-2 mx-2">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button className="btn btn-secondary btn-lg" type="submit">
          Sign Up <i className="isax isax-arrow-right-3 ms-1" />
        </button>
      </div>
    </form>
                    <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">
                      Or
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <Link to="#" className="btn btn-light me-2">
                        <ImageWithBasePath
                          src="assets/img/icons/google.svg"
                          alt="img"
                          className="me-2"
                        />
                        Google
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <ImageWithBasePath
                          src="assets/img/icons/facebook.svg"
                          alt="img"
                          className="me-2"
                        />
                        Facebook
                      </Link>
                    </div>
                    <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
                      Already you have an account?
                      <Link to={route.login} className="link-2 ms-1">
                        {" "}
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
