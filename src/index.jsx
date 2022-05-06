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

//React.strictMode permet de mieux gérer les composants react et d'avoir des fonctions pures qui retournent toujours la meme chose à chaque appel (toujours le même state, exemple : cliquer sur un bouton pour ajouter 100 retourne toujours 100)

//props = propriété ou objet unique qui sert à stocker les valeurs des attributs d'une étiquette (tag)

//props VS state
//props est passé au composant (à la manière des arguments d'une fonction) tandis que state est géré dans le composant (comme le sont les variables déclarées à l'intérieur d'une fonction).

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
