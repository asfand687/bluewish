import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import ComingSoon from './pages/ComingSoon'
import SingleProductPage from './pages/SingleProductPage';
// import Navbar from './components/Navbar';
import Products from './pages/Products';
import { StateContext } from './context/stateContext';

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<ComingSoon />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path="/product/:slug" element={<SingleProductPage />} />
          <Route exact path="/product/category/:category" element={<Products />} />
        </Routes>
      </StateContext>
    </BrowserRouter>
  );
}

export default App;
