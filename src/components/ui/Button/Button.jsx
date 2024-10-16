import styles from './Button.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onClick, className, disabled }) => (
    <button className={classNames(styles.button, className)} type={type} onClick={onClick} disabled={disabled}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;
