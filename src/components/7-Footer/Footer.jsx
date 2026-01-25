import { Link } from "react-router";
import "./footer.css";
import Logo from "../../img/logo1.png";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/" },
  { title: "Accessories", link: "/" },
  { title: "Blog", link: "/" },
  { title: "Contact", link: "/" },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Name */}
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="footer-section">
          <h2>E-commerce MU</h2>
          <p>أفضل منتجات بأفضل سعر</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>روابط</h3>
          <ul>
            {NavLinks.map((item) => (
              <li >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p>Email: mustafaayman980@gmail.com</p>
          <p>Phone: +20 111 706 2398</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 E-commerce MU. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
