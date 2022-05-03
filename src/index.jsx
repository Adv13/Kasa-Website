import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import Error from './components/Error/index'
import About from './pages/About/index'
import Housing from './pages/Housing/index'
import "./styles/global.scss";
import Header from './components/Header/index'
import Footer from './components/Footer/index'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Housing">
          <Housing />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)