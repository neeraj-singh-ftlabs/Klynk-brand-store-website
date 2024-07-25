import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Import CSS module for styling

const Button = ({ type = 'button', onClick, className = '', children, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
