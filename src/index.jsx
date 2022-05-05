import React from "react";//librairie react
import ReactDOM from "react-dom/client";//gérer la structure du site
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";//gérer la navigation du site via url et paths
import Home from "./pages/Home/index";
import Error from "./components/Error/index";
import About from "./pages/About/index";
import Housing from "./pages/Housing/index";
import "./styles/global.scss";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";

//React.strictMode permet de mieux gérer les composants react

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
