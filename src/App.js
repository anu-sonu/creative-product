import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductCard1 from './components/ProductCard1';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/Card' element={<Card/>}/>
    <Route path='/ShoppingCart' element={<ProductCard1/>}/>
    </Routes>
    <Footer/>
    </Router>  
    </div>
  );
}

export default App;
