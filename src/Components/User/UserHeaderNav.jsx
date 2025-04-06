import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import AddPhoto from "../../Assets/adicionar.svg?react";
import Exit from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname} =  useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <Feed />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Exit />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
