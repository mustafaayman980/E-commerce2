import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageTransition from "../../components/6- Animation/PageTransition";
import Loading from "../Loading/Loading";
import Product from "../../components/3-slideproducts/Product";

function SearchPage() {
  const query = new URLSearchParams(useLocation().search).get("q");
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  console.log(results);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("search Error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="category_product">
        {loading ? (
          <Loading key={query} />
        ) : results.length >0 ? ((
          <div className="container">
            <div className="top-slide">
              <h2>
                results for: {query}
              </h2>
            </div>
            <div className="prod">
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )): <div className="container">
            <p>Results Not Found</p>
        </div> }
      </div>
    </PageTransition>
  );
}

export default SearchPage;
