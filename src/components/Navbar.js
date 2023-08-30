import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/posts/create" activeClassName={styles.active}>
              <i class="fa-solid fa-plus"></i> Novo post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName={styles.active}>
                <i className="fas fa-chart-bar"></i> Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            <i className="fas fa-info-circle"></i> Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>
              <i className="fas fa-sign-out-alt"></i> Sair
            </button>
          </li>
        )}
        {!user && (
          <>
            <li>
              <NavLink to="/login">
                <i className="fas fa-sign-in-alt"></i> Entrar
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
