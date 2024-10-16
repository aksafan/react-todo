import styles from './HomePage.module.css';
import { ROUTES } from '../../../util/routeConsts.js';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className={styles.root}>
        <h1 className={styles.title}>Welcome to Your To-Do List App</h1>
        <p className={styles.text}>This is your personal to-do list where you can:</p>
        <ul className={styles.list}>
            <li className={styles.listItem}>Add new tasks to keep track of your daily goals.</li>
            <li className={styles.listItem}>Edit tasks to update their details.</li>
            <li className={styles.listItem}>Mark tasks as completed once you&apos;re done.</li>
            <li className={styles.listItem}>Delete tasks you no longer need.</li>
        </ul>
        <p className={styles.text}>Get started by viewing your <Link className={styles.link} to={ROUTES.list}>to-do
            list</Link>.</p>
    </div>
);

export default HomePage;
