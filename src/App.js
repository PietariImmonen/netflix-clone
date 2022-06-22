import Home from "./components/Home/Home";
import './app.css'
import WholeNav from "./components/Navbar/WholeNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Series from "./components/Series/Series";
import Films from "./components/Films/Films";
import NewPopular from "./components/NewPopular/NewPopular";
import MyList from "./components/MyList/MyList";
import BrowseByLanguages from "./components/BrowseByLanguages/BrowseByLanguages";
import Childrens from "./components/Children/Children";

function App() {
  return (
    <Router>
      <div className="App">
        <WholeNav />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/series" element={<Series />}/>
            <Route path="/films" element={<Films />}/>
            <Route path="/new-popular" element={<NewPopular />}/>
            <Route path="/my-list" element={<MyList />}/>
            <Route path="/films" element={<Films />}/>
            <Route path="/browse-by-languages" element={<BrowseByLanguages />}/>
            <Route path="/children" element={<Childrens />}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
