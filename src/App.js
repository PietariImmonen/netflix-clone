import Home from "./components/Home/Home";
import './app.css'
import WholeNav from "./components/Navbar/WholeNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <WholeNav />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
