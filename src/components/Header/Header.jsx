import css from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import { MdOutlineEditNote } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.jpg";

const Header = () => {
  return (
    <div className={css.container}>
      <nav className={css.navList}>
        <Link to="/" className={css.navLink}>
          <img src={Logo} alt="logo" className={css.logoImage} />
        </Link>

        <ul className={css.navMenuList}>
          <li>
            <Link to="/uber-uns" className={css.navListItem}>
              über uns
            </Link>
          </li>
          <li className={css.dropdown}>
            <span className={css.navListItem}>Dienstleistungen ▼</span>
            <ul className={css.dropdownMenu}>
              <li>
                <Link to="/leistungen" className={css.dropdownItem}>
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link to="/art-der-leistung" className={css.dropdownItem}>
                  Art der Leistung
                </Link>
              </li>
              <li>
                <Link to="/zusatzleistungen" className={css.dropdownItem}>
                  Zusatzleistungen
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs" className={css.navListItem}>
              jobs
            </Link>
          </li>
          <li>
            <Link to="/coupon" className={css.navListItem}>
              Gutschein
            </Link>
          </li>
        </ul>

        <Link to="/bestellen" className={css.orderBtn}>
          <span>Kostenlose Preisberechnung</span>
          <strong>BESTELLEN</strong>
        </Link>
      </nav>

      <button type="button" className={css.burgerBtn}>
        <HiMenu size="22" color="blue" />
      </button>
    </div>
  );
};

export default Header;
