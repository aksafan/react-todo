import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ children, id, onChange, value, inputRef, type = 'text' }) => (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{children}</label>
        <input
            className={styles.input}
            type={type}
            id={id}
            onChange={onChange}
            value={value}
            ref={inputRef}
        />
    </div>
);

Input.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    inputRef: PropTypes.object,
    type: PropTypes.string,
};

export default Input;
