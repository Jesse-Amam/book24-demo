module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdae");


/***/ }),

/***/ "M94v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SignInModal = () => {
  return __jsx("div", {
    id: "sign-in-dialog",
    className: "zoom-anim-dialog mfp-hide"
  }, __jsx("div", {
    className: "small-dialog-header"
  }, __jsx("h3", null, "Sign In")), __jsx("form", null, __jsx("div", {
    className: "sign-in-wrapper"
  }, __jsx("a", {
    href: "/#0",
    className: "social_bt facebook"
  }, "Login with Facebook"), __jsx("a", {
    href: "/#0",
    className: "social_bt google"
  }, "Login with Google"), __jsx("div", {
    className: "divider"
  }, __jsx("span", null, "Or")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email",
    id: "email"
  }), __jsx("i", {
    className: "icon_mail_alt"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    name: "password",
    id: "password",
    value: ""
  }), __jsx("i", {
    className: "icon_lock_alt"
  })), __jsx("div", {
    className: "clearfix add_bottom_15"
  }, __jsx("div", {
    className: "checkboxes float-left"
  }, __jsx("label", {
    className: "container_check"
  }, "Remember me", __jsx("input", {
    type: "checkbox"
  }), __jsx("span", {
    className: "checkmark"
  }))), __jsx("div", {
    className: "float-right mt-1"
  }, __jsx("a", {
    id: "forgot",
    href: "javascript:void(0);"
  }, "Forgot Password?"))), __jsx("div", {
    className: "text-center"
  }, __jsx("input", {
    type: "submit",
    value: "Log In",
    className: "btn_1 full-width"
  })), __jsx("div", {
    className: "text-center"
  }, "Don\u2019t have an account? ", __jsx("a", {
    href: "/register"
  }, "Sign up")), __jsx("div", {
    id: "forgot_pw"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Please confirm login email below"), __jsx("input", {
    type: "email",
    className: "form-control",
    name: "email_forgot",
    id: "email_forgot"
  }), __jsx("i", {
    className: "icon_mail_alt"
  })), __jsx("p", null, "You will receive an email containing a link allowing you to reset your password to a new preferred one."), __jsx("div", {
    className: "text-center"
  }, __jsx("input", {
    type: "submit",
    value: "Reset Password",
    className: "btn_1"
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SignInModal);

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = () => {
  return __jsx("header", {
    className: "header menu_fixed"
  }, __jsx("div", {
    id: "logo"
  }, __jsx("a", {
    href: "/index",
    title: "Sparker - Directory and listings template"
  }, __jsx("img", {
    src: "/images/logo.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_normal"
  }), __jsx("img", {
    src: "/images/logo_sticky.svg",
    width: "165",
    height: "35",
    alt: "",
    className: "logo_sticky"
  }))), __jsx("ul", {
    id: "top_menu"
  }, __jsx("li", null, __jsx("a", {
    href: "/account",
    className: "btn_add"
  }, "Add Listing")), __jsx("li", null, __jsx("a", {
    href: "/#sign-in-dialog",
    id: "sign-in",
    className: "login",
    title: "Sign In"
  }, "Sign In")), __jsx("li", null, __jsx("a", {
    href: "/wishlist",
    className: "wishlist_bt_top",
    title: "Your wishlist"
  }, "Your wishlist"))), __jsx("a", {
    href: "/#menu",
    className: "btn_mobile"
  }, __jsx("div", {
    className: "hamburger hamburger--spin",
    id: "hamburger"
  }, __jsx("div", {
    className: "hamburger-box"
  }, __jsx("div", {
    className: "hamburger-inner"
  })))), __jsx("nav", {
    id: "menu",
    className: "main-menu"
  }, __jsx("ul", null, __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Home")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/index"
  }, "Home version 1")), __jsx("li", null, __jsx("a", {
    href: "/index-2"
  }, "Home version 2")), __jsx("li", null, __jsx("a", {
    href: "/index-3"
  }, "Home version 3")), __jsx("li", null, __jsx("a", {
    href: "/index-4"
  }, "Home version 4")), __jsx("li", null, __jsx("a", {
    href: "/index-5"
  }, "Home version 5")), __jsx("li", null, __jsx("a", {
    href: "/index-6"
  }, "Home version 6 (GDPR)")), __jsx("li", null, __jsx("a", {
    href: "/index-7"
  }, "Src Address Autocomplete")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Listings")), __jsx("ul", null, __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Grid Layout")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-isotope"
  }, "Full+Isotope filter")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Row Layout")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-search-aside"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-search-aside"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-isotope"
  }, "Full+Isotope filter")))), __jsx("li", null, __jsx("a", {
    href: "/listing-map"
  }, "Listing Map")), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Open Street Map")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-search-aside-openstreetmap"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-search-aside-openstreetmap"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterscol-openstreetmap"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-filterstop-openstreetmap"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/grid-listings-isotope-openstreetmap"
  }, "Full+Isotope filter")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-search-aside-openstreetmap"
  }, "Sidebar+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-search-aside-openstreetmap"
  }, "Full+Search mobile 1")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterscol-openstreetmap"
  }, "Sidebar+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-filterstop-openstreetmap"
  }, "Full+Search mobile 2")), __jsx("li", null, __jsx("a", {
    href: "/row-listings-isotope-openstreetmap"
  }, "Full+Isotope filter")), __jsx("li", null, __jsx("a", {
    href: "/detail-hotel-openstreetmap"
  }, "Detail page 1")), __jsx("li", null, __jsx("a", {
    href: "/listing-map-openstreetmap"
  }, "Listing Map")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Detail pages")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/detail-hotel"
  }, "Detail page 1")), __jsx("li", null, __jsx("a", {
    href: "/detail-restaurant"
  }, "Detail page 2")), __jsx("li", null, __jsx("a", {
    href: "/detail-shop"
  }, "Detail page 3")), __jsx("li", null, __jsx("a", {
    href: "/detail-carousel"
  }, "Detail page Carousel 1")), __jsx("li", null, __jsx("a", {
    href: "/detail-carousel-2"
  }, "Detail page Carousel 2")))), __jsx("li", null, __jsx("a", {
    href: "/bookings"
  }, "Bookings - Purchases")), __jsx("li", null, __jsx("a", {
    href: "/checkout"
  }, "Checkout")), __jsx("li", null, __jsx("a", {
    href: "/confirm"
  }, "Confirm")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Pages")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/admin_section/index"
  }, "Admin section")), __jsx("li", null, __jsx("a", {
    href: "/blog"
  }, "Blog")), __jsx("li", null, __jsx("a", {
    href: "/account"
  }, "Account")), __jsx("li", null, __jsx("a", {
    href: "/help"
  }, "Help Section")), __jsx("li", null, __jsx("a", {
    href: "/faq"
  }, "Faq Section")), __jsx("li", null, __jsx("a", {
    href: "/wishlist"
  }, "Wishlist page")), __jsx("li", null, __jsx("a", {
    href: "/contacts"
  }, "Contacts")), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Icon Packs")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/icon-pack-1"
  }, "Icon pack 1")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-2"
  }, "Icon pack 2")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-3"
  }, "Icon pack 3")), __jsx("li", null, __jsx("a", {
    href: "/icon-pack-4"
  }, "Icon pack 4")))), __jsx("li", null, __jsx("a", {
    href: "/about"
  }, "About")), __jsx("li", null, __jsx("a", {
    href: "/media-gallery"
  }, "Media gallery")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/#0"
  }, "Extra")), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/404"
  }, "404 page")), __jsx("li", null, __jsx("a", {
    href: "/contacts-2"
  }, "Contacts 2")), __jsx("li", null, __jsx("a", {
    href: "/pricing-tables"
  }, "Pricing tables")), __jsx("li", null, __jsx("a", {
    href: "/login"
  }, "Login")), __jsx("li", null, __jsx("a", {
    href: "/register"
  }, "Register")), __jsx("li", null, __jsx("a", {
    href: "/menu-options"
  }, "Menu Options")), __jsx("li", null, __jsx("a", {
    href: "/invoice"
  }, "Invoice")), __jsx("li", null, __jsx("a", {
    href: "/coming_soon/index"
  }, "Coming Soon")))), __jsx("li", null, __jsx("span", null, __jsx("a", {
    href: "/thingstodo"
  }, "Things to do"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "plus_border"
  }, __jsx("div", {
    className: "container margin_60_35"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_1"
  }, "Quick Links"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_1"
  }, __jsx("ul", {
    className: "links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "About us")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Faq")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Help")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "My account")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Create account")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Contacts"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_2"
  }, "Categories"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_2"
  }, __jsx("ul", {
    className: "links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Shops")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Hotels")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Restaurants")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Bars")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Events")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Fitness"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_3"
  }, "Contacts"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_3"
  }, __jsx("ul", {
    className: "contacts"
  }, __jsx("li", null, __jsx("i", {
    className: "ti-home"
  }), "97845 Baker st. 567", __jsx("br", null), "Los Angeles - US"), __jsx("li", null, __jsx("i", {
    className: "ti-headphone-alt"
  }), "+39 06 97240120"), __jsx("li", null, __jsx("i", {
    className: "ti-email"
  }), __jsx("a", {
    href: "/#0"
  }, "info@sparker.com"))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, __jsx("h3", {
    "data-target": "#collapse_ft_4"
  }, "Keep in touch"), __jsx("div", {
    className: "collapse dont-collapse-sm",
    id: "collapse_ft_4"
  }, __jsx("div", {
    id: "newsletter"
  }, __jsx("div", {
    id: "message-newsletter"
  }), __jsx("form", {
    method: "post",
    action: "assets/newsletter.php",
    name: "newsletter_form",
    id: "newsletter_form"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "email",
    name: "email_newsletter",
    id: "email_newsletter",
    className: "form-control",
    placeholder: "Your email"
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    id: "submit-newsletter"
  })))), __jsx("div", {
    className: "follow_us"
  }, __jsx("h5", null, "Follow Us"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-twitter-alt"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-google"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-pinterest"
  }))), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, __jsx("i", {
    className: "ti-instagram"
  })))))))), __jsx("hr", null), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    id: "footer-selector"
  }, __jsx("li", null, __jsx("div", {
    className: "styled-select",
    id: "lang-selector"
  }, __jsx("select", null, __jsx("option", {
    value: "English",
    selected: true
  }, "English"), __jsx("option", {
    value: "French"
  }, "French"), __jsx("option", {
    value: "Spanish"
  }, "Spanish"), __jsx("option", {
    value: "Russian"
  }, "Russian")))), __jsx("li", null, __jsx("div", {
    className: "styled-select",
    id: "currency-selector"
  }, __jsx("select", null, __jsx("option", {
    value: "US Dollars",
    selected: true
  }, "US Dollars"), __jsx("option", {
    value: "Euro"
  }, "Euro")))), __jsx("li", null, __jsx("images", {
    src: "images/cards_all.svg",
    alt: ""
  })))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("ul", {
    id: "additional_links"
  }, __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Terms and conditions")), __jsx("li", null, __jsx("a", {
    href: "/#0"
  }, "Privacy")), __jsx("li", null, __jsx("span", null, "\xA9 2020 Sparker")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZHh6");
/* harmony import */ var _components_signInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("M94v");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aIN1");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Account extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("meta", {
      name: "description",
      content: "SPARKER - Premium directory and listings template by Ansonika."
    }), __jsx("meta", {
      name: "author",
      content: "Ansonika"
    }), __jsx("title", null, "SPARKER | Premium directory and listings template by Ansonika."), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/bootstrap.min.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/style.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/vendors.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "css/custom.css",
      rel: "stylesheet"
    })), __jsx("div", {
      id: "page"
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx("div", {
      className: "sub_header_in sticky_header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h1", null, "Account"))), __jsx("main", null, __jsx("div", {
      className: "container margin_60"
    }, __jsx("div", {
      className: "row justify-content-center"
    }, __jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-8"
    }, __jsx("div", {
      className: "box_account"
    }, __jsx("h3", {
      className: "client"
    }, "Already Client"), __jsx("div", {
      className: "form_container"
    }, __jsx("div", {
      className: "row no-gutters"
    }, __jsx("div", {
      className: "col-lg-6 pr-lg-1"
    }, __jsx("a", {
      href: "#0",
      className: "social_bt facebook"
    }, "Login with Facebook")), __jsx("div", {
      className: "col-lg-6 pl-lg-1"
    }, __jsx("a", {
      href: "#0",
      className: "social_bt google"
    }, "Login with Google"))), __jsx("div", {
      className: "divider"
    }, __jsx("span", null, "Or")), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      name: "email",
      id: "email",
      placeholder: "Email*"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "password",
      className: "form-control",
      name: "password_in",
      id: "password_in",
      value: "",
      placeholder: "Password*"
    })), __jsx("div", {
      className: "clearfix add_bottom_15"
    }, __jsx("div", {
      className: "checkboxes float-left"
    }, __jsx("label", {
      className: "container_check"
    }, "Remember me", __jsx("input", {
      type: "checkbox"
    }), __jsx("span", {
      className: "checkmark"
    }))), __jsx("div", {
      className: "float-right"
    }, __jsx("a", {
      id: "forgot",
      href: "javascript:void(0);"
    }, "Lost Password?"))), __jsx("div", {
      className: "text-center"
    }, __jsx("input", {
      type: "submit",
      value: "Log In",
      className: "btn_1 full-width"
    })), __jsx("div", {
      id: "forgot_pw"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      name: "email_forgot",
      id: "email_forgot",
      placeholder: "Type your email"
    })), __jsx("p", null, "A new password will be sent shortly."), __jsx("div", {
      className: "text-center"
    }, __jsx("input", {
      type: "submit",
      value: "Reset Password",
      className: "btn_1"
    }))))), __jsx("div", {
      className: "row hidden_tablet"
    }, __jsx("div", {
      className: "col-md-6"
    }, __jsx("ul", {
      className: "list_ok"
    }, __jsx("li", null, "Find Locations"), __jsx("li", null, "Quality Location check"), __jsx("li", null, "Data Protection"))), __jsx("div", {
      className: "col-md-6"
    }, __jsx("ul", {
      className: "list_ok"
    }, __jsx("li", null, "Secure Payments"), __jsx("li", null, "H24 Support"))))), __jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-8"
    }, __jsx("div", {
      className: "box_account"
    }, __jsx("h3", {
      className: "new_client"
    }, "New Client"), " ", __jsx("small", {
      className: "float-right pt-2"
    }, "* Required Fields"), __jsx("div", {
      className: "form_container"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      name: "email",
      id: "email",
      placeholder: "Email*"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "password",
      className: "form-control",
      name: "password_in_2",
      id: "password_in_2",
      value: "",
      placeholder: "Password*"
    })), __jsx("hr", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      className: "container_radio",
      style: "display: inline-block; margin-right: 15px;"
    }, "Private", __jsx("input", {
      type: "radio",
      name: "client_type",
      checked: true,
      value: "private"
    }), __jsx("span", {
      className: "checkmark"
    })), __jsx("label", {
      className: "container_radio",
      style: "display: inline-block;"
    }, "Company", __jsx("input", {
      type: "radio",
      name: "client_type",
      value: "company"
    }), __jsx("span", {
      className: "checkmark"
    }))), __jsx("div", {
      className: "private box"
    }, __jsx("div", {
      className: "row no-gutters"
    }, __jsx("div", {
      className: "col-6 pr-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Name*"
    }))), __jsx("div", {
      className: "col-6 pl-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Last Name*"
    }))), __jsx("div", {
      className: "col-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Full Address*"
    })))), __jsx("div", {
      className: "row no-gutters"
    }, __jsx("div", {
      className: "col-6 pr-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "City*"
    }))), __jsx("div", {
      className: "col-6 pl-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Postal Code*"
    }))), __jsx("div", {
      className: "col-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "custom-select-form"
    }, __jsx("select", {
      className: "wide add_bottom_10",
      name: "country",
      id: "country"
    }, __jsx("option", {
      value: "",
      selected: true
    }, "Country*"), __jsx("option", {
      value: "Europe"
    }, "Europe"), __jsx("option", {
      value: "United states"
    }, "United states"), __jsx("option", {
      value: "Asia"
    }, "Asia")))))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Telephone *"
    }))))), __jsx("div", {
      className: "company box",
      style: "display: none;"
    }, __jsx("div", {
      className: "row no-gutters"
    }, __jsx("div", {
      className: "col-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Company Name*"
    }))), __jsx("div", {
      className: "col-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Full Address"
    })))), __jsx("div", {
      className: "row no-gutters"
    }, __jsx("div", {
      className: "col-6 pr-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "City*"
    }))), __jsx("div", {
      className: "col-6 pl-1"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Postal Code*"
    }))), __jsx("div", {
      className: "col-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("div", {
      className: "custom-select-form"
    }, __jsx("select", {
      className: "wide add_bottom_10",
      name: "country",
      id: "country"
    }, __jsx("option", {
      value: "",
      selected: true
    }, "Country*"), __jsx("option", {
      value: "Europe"
    }, "Europe"), __jsx("option", {
      value: "United states"
    }, "United states"), __jsx("option", {
      value: "Asia"
    }, "Asia")))))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Telephone *"
    }))))), __jsx("hr", null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", {
      className: "container_check"
    }, "Accept ", __jsx("a", {
      href: "#0"
    }, "Terms and conditions"), __jsx("input", {
      type: "checkbox"
    }), __jsx("span", {
      className: "checkmark"
    }))), __jsx("div", {
      className: "text-center"
    }, __jsx("input", {
      type: "submit",
      value: "Register",
      className: "btn_1 full-width"
    })))))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), __jsx(_components_signInModal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx("div", {
      id: "toTop"
    }), __jsx("script", {
      src: "js/common_scripts.js"
    }), __jsx("script", {
      src: "js/functions.js"
    }), __jsx("script", {
      src: "assets/validate.js"
    }), __jsx("script", null, `
		$('.wish_bt.liked').on('click', function (c) {
			$(this).parent().parent().parent().fadeOut('slow', function (c) {});
		});
        `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });