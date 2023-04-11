import React from 'react';
import './Button.css'
interface ButtonProps {
    title: string
}
export const Button = ({title}: ButtonProps) => {
    return (
        <button className="ui-btn">{title}</button>
    )
}


