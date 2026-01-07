import TopHeader from "./components/1-header/TopHeader";
import BtmHeader from "./components/1-header/BtmHeader";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/5-scroll/ScrollToTop";

function App() {
  return (
    <>
      <header className="">
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "15px",
          },
        }}
      />
      <nav>
        <ScrollToTop />
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
