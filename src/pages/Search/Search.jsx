import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";

function Search() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestion = async () => {
      if (!search.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`,
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("search Error :", error);
        setSuggestions([]);
      }
      //    finally {
      //     setLoading(false);
      //   }
    };
    const debonuce = setTimeout(() => {
      fetchSuggestion();
    }, 300);

    return () => clearTimeout(debonuce);
  }, [search]);

  console.log("====================================");
  console.log(suggestions);
  console.log("====================================");
  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          placeholder="search for products"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <IoSearchSharp />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggest">
          {suggestions.map((item) => (
            <Link to={`/products/${item.id}`}>
              <li key={item.id}>
                <img src={item.images[0]} alt={item.title} />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
