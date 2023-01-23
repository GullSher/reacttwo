import './App.css';
import MenuBar from './Assets/Components/MenuBar.jsx';
import Header from './Assets/Components/Header.jsx';
// import Header1 from './Assets/Components/Header1.jsx';
import Header2 from './Assets/Components/Header2.jsx';
import Footer from './Assets/Components/Footer';
import Footer2 from './Assets/Components/Footer2';


function App() {
  return (
    <div className="App">
      <div><h2>This is going to recreate just to update git.</h2></div>
      <MenuBar />
      <Header />
      {/* <Header1 /> */}
      <Header2 />
      <Footer />
      <Footer2 />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
