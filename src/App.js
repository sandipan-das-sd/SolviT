// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutUs from "./components/About-us/AboutUs";
// import Courses from "./components/Courses-section/Courses";
// import Testimonials from "./components/Testimonial/Testimonials";
// import ChooseUs from "./components/Choose-us/ChooseUs";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/blog" element={<Testimonials />} />
//         <Route path="/pages" element={<ChooseUs />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Testimonials from "./components/Testimonial/Testimonials";
import ChooseUs from "./components/Choose-us/ChooseUs";
import Layout from "./pages/Layout"; // Adjust the import path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
        <Route
          path="/pages"
          element={
            <Layout>
              <ChooseUs />
            </Layout>
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
