/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Button.css'

export default props => {
    let classes = 'btn '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    return (
    <button 
    onClick={e => props.click && props.click(props.label)}
    className={classes}>
    {props.label}
    </button>)
}