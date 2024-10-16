import PropTypes from 'prop-types';
import styles from './Loader.module.css';
import classNames from 'classnames';

const Loader = ({ className }) => {
    return <div className={classNames(styles.loader, className)}></div>;
};

Loader.propTypes = {
    className: PropTypes.string,
};

export default Loader;