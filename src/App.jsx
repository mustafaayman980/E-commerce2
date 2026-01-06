import TopHeader from "./components/1-header/TopHeader";
import BtmHeader from "./components/1-header/BtmHeader";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <header className="">
        <TopHeader />
        <BtmHeader />
      </header>
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </nav>
    </>
  );
}

export default App;
