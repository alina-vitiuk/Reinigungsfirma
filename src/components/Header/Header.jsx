import css from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={css.container}>
      <nav className={css.navList}>
        <Link to="/" className={css.navLink}>
          <img
            src="../../Images/logo.png"
            alt="logo"
            width="25"
            height="10"
            className={css.logoImage}
          />
        </Link>

        <ul className={css.navMenuList}>
          <li>
            <Link to="/uber-uns" className={css.navListItem}>
              über uns
            </Link>
          </li>
          <li>
            <Link to="/leistungen" className={css.navListItem}>
              Dienstleistungen
            </Link>
          </li>
          <li>
            <Link to="/jobs" className={css.navListItem}>
              jobs
            </Link>
          </li>
        </ul>

        <address className={css.addressMenu}>
          <ul className={css.addressList}>
            <li className={css.addressListItem}>
              <a href="tel:+4917661122476">tel:+4917661122476</a>
            </li>
            <li className={css.addressListItem}>
              <a href="mailto:sauberkeit.leader@gmail.com">
                sauberkeit.leader@gmail.com
              </a>
            </li>
          </ul>
        </address>
      </nav>

      <button type="button" className={css.burgerBtn}>
        <HiMenu size="22" color="blue" />
      </button>
    </div>
  );
};

export default Header;
