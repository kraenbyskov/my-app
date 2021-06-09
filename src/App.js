import Container from './components/Container';

import Header from './components/Header';
import Footer from './components/Footer';

import About from "./screens/About"
import Contact from "./screens/Contact"
import Galleri from "./screens/Galleri"
import Home from "./screens/Home"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Galleri">
          <Galleri />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
