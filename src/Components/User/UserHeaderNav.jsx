import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import AddPhoto from "../../Assets/adicionar.svg?react";
import Exit from "../../Assets/sair.svg?react";
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate()
  

  function handleLogout() {
    userLogout()
    navigate('/login')
  
  }
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <Feed />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AddPhoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <Exit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
