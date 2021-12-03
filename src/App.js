import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Add from "./Add";
import './App.css';
import Currentdate from './Currentdate';
import Guess from "./Guess";
import Header from './Header';
import Home from "./Home";
import LeapYear from "./LeapYear";
import Prime from "./Prime";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/getDate" element={<Currentdate />}></Route>
            <Route path="/LeapYear" element={<LeapYear/>}></Route>
            <Route path="/guess" element={<Guess/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/Prime" element={<Prime/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
