import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import styles from './NavBar.module.css';
import { ROUTES } from '../util/routeConsts.js';

const NavBar = () => {
    return (
        <div className="container">
            <nav className={styles.nav}>

                <Link to="/">
                    <img src={logo} alt="" className={styles.logo} />
                </Link>
                <Link to={ROUTES.list} className={styles.link}>
                    To do list
                </Link>

            </nav>
        </div>
    )
        ;
};

export default NavBar;
