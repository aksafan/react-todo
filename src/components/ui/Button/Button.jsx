import styles from './Button.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onClick, className }) => {
    return <button className={classNames(styles.root, className)} type={type} onClick={onClick}>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
