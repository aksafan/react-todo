import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './NavBar.module.css';
import { config } from './consts';

const NavBar = () => (
    <div className="container">
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </NavLink>
            <ul className={styles.menu}>
                {config.map(item => (
                    <li key={item.route}>
                        <NavLink
                            to={item.route}
                            className={
                                ({ isActive }) =>
                                    [
                                        styles.link,
                                        isActive ? styles.active : '',
                                    ].join(' ')
                            }
                        >
                            {item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);

export default NavBar;
