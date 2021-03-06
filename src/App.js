import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Switch> */}
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/react-portfolio">
          <About />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* </Switch> */}
      </Router>
      <Footer />
    </div>

  );
}

export default App;
