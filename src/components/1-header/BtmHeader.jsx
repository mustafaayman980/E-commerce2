import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router";
import { PiSignInFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import { useLocation } from "react-router";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/Accessories" },
  { title: "Blog", link: "/Blog" },
  { title: "Contact", link: "/Contact" },
];
function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [openList, setOpenList] = useState(false);
  useEffect(() => {
    setOpenList(false);
  }, [location]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <div className="nav">
          <div className="category-nav">
            <div
              className="category_btn"
              onClick={() => setOpenList(!openList)}
            >
              <IoMdMenu />
              <p>browse category </p>
              <MdOutlineArrowDropDown />
            </div>
            <div className={`category-nav-list ${openList ? "active" : ""}`}>
              {categories.map((category) => (
                <Link to={`category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>
          <div className="nav_link">
            {NavLinks.map((item) => (
              <li className={location.pathname === item.link ? "active" : ""}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInFill />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BtmHeader;
