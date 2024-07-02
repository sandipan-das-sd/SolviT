// // import React, { useRef } from "react";
// // import { Container } from "reactstrap";
// // import "./header.css";

// // const navLinks = [
// //   {
// //     display: "Home",
// //     url: "#",
// //   },
// //   {
// //     display: "About",
// //     url: "#",
// //   },

// //   {
// //     display: "Courses",
// //     url: "#",
// //   },
// //   {
// //     display: "Pages",
// //     url: "#",
// //   },
// //   {
// //     display: "Blog",
// //     url: "#",
// //   },
// // ];

// // const Header = () => {
// //   const menuRef = useRef();

// //   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

// //   return (
// //     <header className="header">
// //       <Container>
// //         <div className="navigation d-flex align-items-center justify-content-between">
// //           <div className="logo">
// //             <h2 className=" d-flex align-items-center gap-1">
// //               <i class="ri-pantone-line"></i> SolviT
// //             </h2>
// //           </div>

// //           <div className="nav d-flex align-items-center gap-5">
// //             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
// //               <ul className="nav__list">
// //                 {navLinks.map((item, index) => (
// //                   <li key={index} className="nav__item">
// //                     <a href={item.url}>{item.display}</a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="nav__right">
// //               <p className="mb-0 d-flex align-items-center gap-2">
// //                 <i class="ri-phone-line"></i> +91 8335019404
// //               </p>
// //             </div>
// //           </div>

// //           <div className="mobile__menu">
// //             <span>
// //               <i class="ri-menu-line" onClick={menuToggle}></i>
// //             </span>
// //           </div>
// //         </div>
// //       </Container>
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./header.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "#home",
//   },
//   {
//     display: "About",
//     url: "#about",
//   },
//   {
//     display: "Courses",
//     url: "#courses",
//   },
//   {
//     display: "Pages",
//     url: "#pages",
//   },
//   {
//     display: "Blog",
//     url: "#blog",
//   },
// ];

// const Header = ({ onLinkClick }) => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i className="ri-pantone-line"></i> SolviT
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url} onClick={(e) => onLinkClick(e, item.url)}>
//                       {item.display}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i className="ri-phone-line"></i> +91 8335019404
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i className="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React, { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  { display: "Home", url: "/home" },
  { display: "About", url: "/about" },
  { display: "Courses", url: "/courses" },
  { display: "Pages", url: "/pages" },
  { display: "Blog", url: "/blog" },
];

const Header = ({ onLinkClick }) => {
  const menuRef = useRef();
  const navigate = useNavigate();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleClick = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> SolviT
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={(e) => handleClick(e, item.url)}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 8335019404
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
