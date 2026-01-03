import TopHeader from "./components/1-header/TopHeader"
import BtmHeader from "./components/1-header/BtmHeader";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";





function App() {
 
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App
