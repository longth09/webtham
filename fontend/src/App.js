import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/Header.css";
import "../src/assets/css/Home.css";
import "../src/assets/css/Footer.css";
import "../src/assets/css/ProductDetail.css";
import "../src/assets/css/Signup.css";
import "../src/assets/css/Cart.css";
import "../src/assets/css/Pay.css";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import Blogs from "./pages/Blogs";
import BlogsContent from "./pages/BlogsContent";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blogs/:slug" element={<BlogsContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
