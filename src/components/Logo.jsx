import React from "react";
import '../styles/Logo.css';

function Logo({ img }) {
    return (
        <img 
            src={ img }
            className='calculator-logo'
            alt='Calculator logo'
        />
    );
}

export default Logo;
