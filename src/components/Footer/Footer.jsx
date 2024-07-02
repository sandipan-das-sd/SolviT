// import React from "react";
// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

// import "./footer.css";

// const footerQuickLinks = [
//   {
//     display: "Home",
//     url: "#",
//   },
//   {
//     display: "About US",
//     url: "#",
//   },

//   {
//     display: "Courses",
//     url: "#",
//   },

//   {
//     display: "Blog",
//     url: "#",
//   },
// ];

// const footerInfoLinks = [
//   {
//     display: "Privacy Policy",
//     url: "#",
//   },
//   {
//     display: "Membership",
//     url: "#",
//   },

//   {
//     display: "Purchases Guide",
//     url: "#",
//   },

//   {
//     display: "Terms of Service",
//     url: "#",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col lg="3" md="6" className="mb-4">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i> SolviT.
//             </h2>

//             <div className="follows">
//               <p className="mb-0">Follow us on social media</p>
//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-facebook-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-instagram-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-linkedin-line"></i>
//                 </a>
//               </span>

//               <span>
//                 {" "}
//                 <a href="facebook.com">
//                   <i class="ri-twitter-line"></i>
//                 </a>
//               </span>
//             </div>
//           </Col>

//           <Col lg="3" md="6" className="mb-4">
//             <h6 className="fw-bold">Explore</h6>
//             <ListGroup className="link__list">
//               {footerQuickLinks.map((item, index) => (
//                 <ListGroupItem key={index} className="border-0 ps-0 link__item">
//                   {" "}
//                   <a href={item.url}>{item.display}</a>
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="6" className="mb-4">
//             <h6 className="fw-bold">Information</h6>
//             <ListGroup className="link__list">
//               {footerInfoLinks.map((item, index) => (
//                 <ListGroupItem key={index} className="border-0 ps-0 link__item">
//                   {" "}
//                   <a href={item.url}>{item.display}</a>
//                 </ListGroupItem>
//               ))}
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="6">
//             <h6 className="fw-bold">Get in Touch</h6>

//             <p>Address:Kokata</p>
//             <p> Phone: +91 8335019404 </p>
//             <p>Email: solvit@gmail.com</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  { display: "Home", url: "/home" },
  { display: "About Us", url: "/about" },
  { display: "Courses", url: "/courses" },
  { display: "Blog", url: "/blog" },
];

const footerInfoLinks = [
  { display: "Privacy Policy", url: "/privacy-policy" },
  { display: "Membership", url: "/membership" },
  { display: "Purchases Guide", url: "/purchases-guide" },
  { display: "Terms of Service", url: "/terms-of-service" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> SolviT.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a href="https://facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="https://instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url} onClick={(e) => handleClick(e, item.url)}>
                    {item.display}
                  </a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url} onClick={(e) => handleClick(e, item.url)}>
                    {item.display}
                  </a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Kolkata</p>
            <p>Phone: +91 8335019404</p>
            <p>Email: solvit@gmail.com</p>
          </Col>
        </Row>

        <Row>
          <Col lg="12" className="mt-4">
            <h6 className="fw-bold">Locate Us</h6>
            <div className="map">
              {/* <iframe
                src=""
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58828.3034801831!2d88.40660755!3d22.848035550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8972a2c1dd41f%3A0x60d21f2736a2633d!2sBhatpara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1719909375544!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
