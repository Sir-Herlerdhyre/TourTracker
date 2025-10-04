import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useState } from "react";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeToggle = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Logo closeToggle={closeToggle} />
      <ul
        className={
          isOpen ? `${styles.navbarmenu} ${styles.active}` : styles.navbarmenu
        }
      >
        <li>
          <NavLink to="/" onClick={closeToggle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={closeToggle}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" onClick={closeToggle}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink} onClick={closeToggle}>
            login
          </NavLink>
        </li>
      </ul>

      <div className={styles.toggle} onClick={handleToggle}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
}

export default PageNav;
