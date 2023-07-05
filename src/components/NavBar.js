import Logo from '../assets/costs_logo.png';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Projetos</li>
          <li>Empresa</li>
          <li>Contato</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
