import PropTypes from 'prop-types';
import styles from "./Select.module.css"
import classNames from 'classnames';
const Select = ({ className, options, onChange, value }) => {
    return (
        <select onChange={onChange} value={value} className={classNames(styles.root, className)}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Select;
