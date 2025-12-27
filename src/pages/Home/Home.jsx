import Slider from "../../components/2-Hero/Slider";
import "./home.css";
import SlidProduct from "../../components/3-slideproducts/SlidProduct";
import { useEffect, useState } from "react";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];
// https://dummyjson.com/products/category/smartphone

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );

            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const dataProducts = Object.assign({}, ...results);
        setProducts(dataProducts);
      } catch (error) {
        console.error("error fetching", error);
      } finally{
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Slider />
      {loading ? (
        <p>loading.......</p>
      ) : (
        categories.map((category) => (
          <SlidProduct
            key={category}
            data={products[category]}
            title={category.replace("-", " ")}
            
          />
        ))
      )}
    </div>
  );
}

export default Home;
