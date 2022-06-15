import Home from "./components/Home/Home";
import './app.css'
import WholeNav from "./components/Navbar/WholeNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <WholeNav />
      <Home />
    </div>
    </Router>
  );
}

export default App;
