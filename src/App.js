import "./index.css";
import React from "react";
import AboutUs from "./components/about us/AboutUs";
import Header from "./components/header/Header";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
