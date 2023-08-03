import React from 'react';
import '../styles/Button.css'

function Button(props) {

    // Determines if is a operator or not
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
            className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
            onClick={() => props.handleClic(props.children)}
        >
            {/** props.children is the text inside the component */}
            {props.children}
        </div>
    )
}

export default Button;
