import Slider from "../../components/2-Hero/Slider";
import "./home.css";
import SlidProduct from "../../components/3-slideproducts/SlidProduct";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import PageTransition from "../../components/6- Animation/PageTransition";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
  // "beauty",
  // "fragrances",
  // "furniture",
  // "groceries",
  // "home-decoration",
  // "kitchen-accessories",
  // "mens-shirts",
  // "mens-shoes",
  // "mens-watches",
  // "motorcycle",
  // "skin-care",
  // "tops",
  // "vehicle",
  // "womens-bags",
  // "womens-dresses",
  // "womens-jewellery",
  // "womens-shoes",
  // "womens-watches",
];
// https://dummyjson.com/products/category/smartphone

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  // محوله لتعديل الليسته 
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //     fetch(`https://dummyjson.com/products/category-list`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCategoryProduct(data);
  //       })
  //       .catch((error) => console.error(error))
  //       .finally(() => setLoading(false));
  //   }, [category]);
  // 

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
    <PageTransition>
      <div>
        <Slider />
        {loading
          ? // <p>loading.......</p>
            categories.map((category) => <Loading key={category} />)
          : categories.map((category) => (
              <SlidProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}

export default Home;
