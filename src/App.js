import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
// import ComingSoon from './pages/ComingSoon'
import SingleProductPage from './pages/SingleProductPage';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home'
import { StateContext } from './context/stateContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/product/:slug" element={<SingleProductPage />} />
          <Route exact path="/product/category/:category" element={<Products />} />
        </Routes>
      </StateContext>
    </BrowserRouter>
  );
}

export default App;
