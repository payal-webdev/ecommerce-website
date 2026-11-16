import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Registration from "./ragistration";
import Products from "./products";
import Categories from "./categories";
import CategoryProducts from "./categoryproducts";
import Cart from "./cart.";
import Wishlist from "./wishlist";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/ragistration" element={<Registration />} />

         <Route path="/products" element={<Products/>} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/category/:slug"  element={<CategoryProducts />}
/>
         
    </Routes>

    </BrowserRouter>
  );
}

export default App;