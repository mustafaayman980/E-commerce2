import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "../../components/3-slideproducts/Product";
import "./CategoryPage.css";
import Loading from "../Loading/Loading";
import PageTransition from "../../components/6- Animation/PageTransition";
function CategoryPage() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  const [categoryProduct, setCategoryProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  console.log(categoryProduct);
  return (
    <PageTransition key={category}>
      <div className="category_product">
        {loading ? (
          <Loading key={category} />
        ) : (
          <div className="container">
            <div className="top-slide">
              <h2>
                {category}: {categoryProduct.limit}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                ex!
              </p>
            </div>
            <div className="prod">
              {categoryProduct.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
