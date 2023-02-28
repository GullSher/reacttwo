
import './App.css';
import MenuBar from './Assets/Components/MenuBar.jsx';
import Header from './Assets/Components/Header.jsx';
// import Header1 from './Assets/Components/Header1.jsx';
// import Header2 from './Assets/Components/Header2.jsx';
// import bootstrap from node_modules to use it
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Importing "node_modules" from bootstrap for using css of bootstraps
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// importing "switch,Route, and ... from " reac-router-dom for using .....
// instead of blow import in "react-router-dom" v6 we are using
//import { Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Redirect, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// import { BrowserRouter as Router, redirect, Route } from "react-router-dom";

// import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Redirect as redirect } from "react-router-dom";
// import { Redirect as redirect } from "react-router-dom";

// import Footer from './Assets/Components/Footer';
// import Footer2 from './Assets/Components/Footer2';
// import Home from "./Assets/Components/Home";
// import About from "./Assets/Components/About";
// import Services from "./Assets/Components/Services";
// import Contact from "./Assets/Components/Contact";
// import PageTwo from "./Assets/Components/PageTwo";



function App() {
  return (
    <div className="App">
      <div><h2>This is going to recreate just to update git.</h2>
        <h3>
          checking and updating this site using thapa's complete responsive
          anitmated website using react js in hindi in 2022 by thapa
        </h3>
      </div>

      <MenuBar />

      {/* In react-router-dom, you also do not need to use
         the "exact" in the Route declaration.
    For more information,
 you can visit the official documentation: upgrade to react-router-dom v6 */}
      {/* <Router> */}
      {/* <switch> */}
      {/* <Route exact path="/" componet={Home} /> */}
      {/* <Route exact path="/" componet={About} /> */}
      {/* <Route exact path="/" componet={Services} /> */}
      {/* <Route exact path="/" componet={Contact} /> */}
      {/* <Route exact path="/" componet={PageTwo} /> */}
      {/* <redirect to="/" /> */}
      {/* </Router> */}
      {/* </switch> */}
      {/* <Navbar /> */}
      <Header />
      {/* <Header1 /> */}
      {/* <Header2 /> */}
      <div>
        <h2>
          This is going to show.
        </h2>
      </div>
      {/* <Footer /> */}
      {/* <Footer2 /> */}
      <h2>
        Enter SomeThing Here.
        Edit <code>src/App.js</code> and save to reload.
      </h2>
    </div>
  );
}

export default App;
