import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

function Search() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  };

  useEffect(() => {
    const fetchSuggestion = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${search}`
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

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          placeholder="search for products"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <IoSearchSharp />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggest">
          {suggestions.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
