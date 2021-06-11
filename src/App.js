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
import { useEffect, useState } from 'react';


const FetchMyData = (setState, categori) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(`https://api.themoviedb.org/3/movie/${categori}?api_key=7c105b21789fdf773ab798b1c284f40e&language=en-US&page=1`, requestOptions)
    .then(response => response.json())
    .then(result => setState(result))
    .catch(error => console.log('error', error));
}


function App() {

  const [movieState, setMovieState] = useState()
  const [categori, setCategori] = useState("popular")


  useEffect(() => {
    FetchMyData(setMovieState, categori)
  }, [categori])



  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home setCategori={setCategori} movieState={movieState} />
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
