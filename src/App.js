import "./index.css";
import React from "react";
import AboutUs from "./components/about us/AboutUs";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
// import Downloads from "./components/documents/Document"
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
