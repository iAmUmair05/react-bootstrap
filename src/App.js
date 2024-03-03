import './App.css';
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./includes/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './includes/Footer';
import Slider from './includes/Slider';

function App() {
  return (
    <Router>
      <Navbar />
      <Slider></Slider>

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route exact path='/about' element={<About />} />
      </Routes>

      <Routes>
        <Route exact path='/contact' element={<Contacts />} />
      </Routes>

<Footer />

   </Router>
  );
}

export default App;
