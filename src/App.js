import './App.css';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import RecommendedProducts from './components/RecommendedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ProductDetail/>
     <RecommendedProducts/>
     <Footer/>
    </div>
  );
}

export default App;
