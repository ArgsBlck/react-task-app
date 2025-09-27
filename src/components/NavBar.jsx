import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ background: '#f0f0f0', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/">Начало</Link></li>
        <li><Link to="/login">Вход</Link></li>
        <li><Link to="/register">Регистрация</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;