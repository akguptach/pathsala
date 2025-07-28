import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../imageWithBasePath";
import { header } from "../data/json/header";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes";
import { setDataTheme } from "../../redux/themeSettingSlice";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../inputfield/InputField";
import ModalPopUp from "../modalpopup/ModalPopUp"
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);
  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [subsidebar2, setSubsidebar2] = useState("");
  const [basePath, setBasePath] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDataTheme(theme));
  };
  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };
  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const toggleSubsidebar2 = (subitem: any) => {
    if (subitem === subsidebar2) {
      setSubsidebar2("");
    } else {
      setSubsidebar2(subitem);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("class", dataTheme);
  }, [dataTheme])
  useEffect(() => {
    const path = location.pathname;
    const pathArray = path.split("/").filter(Boolean);
    setBasePath(pathArray[0])
  }, [location.pathname])
  const DarkButton = () => {
    return (
      <div className={`icon-btn  ${location.pathname === '/index' ? '' : 'me-2'}`}>
        <Link
          to="#"
          id="dark-mode-toggle"
          className={`theme-toggle ${dataTheme === 'light' && 'activate'}`}
          onClick={() => handleDataThemeChange("dark-mode")}
        >
          <i className="isax isax-sun-15" />
        </Link>
        <Link
          to="#"
          id="light-mode-toggle"
          className={`theme-toggle ${dataTheme === 'dark-mode' && 'activate'}`}
          onClick={() => handleDataThemeChange("light")}
        >
          <i className="isax isax-moon" />
        </Link>
      </div>

    )
  }
  const getDynamicRoute = (menuItem: any) => {
    switch (menuItem.tittle) {
      case "Explore Schools":
        return all_routes.schoolList; // Replace with the actual route for "Explore Schools"
      case "AddSchools":
        return all_routes.addschool; // Replace with the actual route for "AddSchools"
      // case "Compare":
      //   return all_routes.compare; // Replace with the actual route for "Compare"
      // case "Add Resource":
      //   return all_routes.addResource; // Replace with the actual route for "Add Resource"
      // case "Blog":
      //   return all_routes.blog; // Replace with the actual route for "Blog"
      default:
        return all_routes.homeone; // Fallback to a default route
    }
  };

  return (
    <>
      <header className={`${location.pathname === '/index' ? 'header-one' : location.pathname === '/index-3' || location.pathname === '/index-6' ?
        'header-three' : location.pathname === '/index-4' ? 'header-four' : location.pathname === '/index-5' ? 'header-five header-two' : 'header-two'} ${scrolled ? "fixed" : ""}`}>
        <div className="container">
          <div className="header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <i className="isax isax-menu"></i>
                </span>
              </Link>
              <div className="navbar-logo">
                <Link className="logo-white header-logo" to={all_routes.homeone}>
                  {location.pathname === '/index' ?
                    <ImageWithBasePath src="assets/img/logo-white.svg" className="logo" alt="Logo" /> :
                    <ImageWithBasePath src="assets/img/logo.svg" className="logo" alt="Logo" />
                  }
                </Link>
                <Link className="logo-dark header-logo" to={all_routes.homeone}>
                  <ImageWithBasePath
                    src="assets/img/logo-white.svg"
                    className="logo"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className={`main-menu-wrapper ${isMegaMenu ? 'active' : ''}`}>
              <div className="menu-header">
                <Link to={all_routes.homeone} className="menu-logo">
                  <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <ul className={`main-nav ${isMegaMenu ? 'active' : ''}`}>
                {header.map((mainMenus: any, mainIndex) => (
                  <React.Fragment key={mainIndex}>
                    {mainMenus ? (
                      <li
                        key={mainIndex}
                        className={`has-submenu megamenu ${location.pathname.includes('index') ? "active" : ""}`}
                        onClick={() => toggleSidebar(mainMenus.tittle)}
                      >
                        <Link to={getDynamicRoute(mainMenus)}>
                          {mainMenus.tittle}
                        </Link>
                        <ul></ul>
                      </li>
                    ) : null}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            {location.pathname === '/index' ?
              <div className="header-btn d-flex align-items-center">
                <DarkButton />
                <div className="icon-btn">
                  <Link to={all_routes.cart} className="position-relative">
                    <i className="isax isax-shopping-cart5" />
                    <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                      1
                    </span>
                  </Link>
                </div>
                <Link
                  to={all_routes.login}
                  className="btn btn-primary d-inline-flex align-items-center me-2"
                >
                  Sign In
                </Link>
                <Link to={all_routes.register} className="btn btn-secondary me-0">
                  Register
                </Link>
              </div> : null
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Header