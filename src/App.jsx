
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Success from './pages/Success';
import {
  BrowserRouter as Router,
  Routes,
  Route,

  Navigate,
  
} from "react-router-dom";
import { useSelector } from 'react-redux';


const App = () => {
  const user = useSelector ((state) => state.user.currentUser);
  
  return (
    <Router>
      <Routes>

        <Route exact path="/" element= {<Home/>}></Route>

        <Route path="/products/:category" element={<ProductList/>}></Route>

        <Route path="/product/:id" element={<Product/>}></Route>

        <Route path="/cart" element={<Cart/>}></Route>

        <Route path="/success" element={<Success/>}></Route>

        <Route path="/login"  element={<Navigate replace to="/" />}/>

        <Route path="/register"  element={<Navigate replace to="/" />}/>


      </Routes>
    </Router>

  );
};

export default App
