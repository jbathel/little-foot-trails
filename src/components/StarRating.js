import React from 'react'

const StarRating = ({
    selected = false,
    onClick = f => f
}) => (<div className={selected
    ? "star selected"
    : "star"} onClick={onClick}/>);
