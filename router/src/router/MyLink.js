import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyLink = ({children, to, onClick, ...rest}) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (onClick) {
            onClick(e)
        }
        e.preventDefault();
        navigate(to);
    }

    return (
        <a href={to} onClick={(e) => handleClick(e)}>{children}</a>
    )
}

export default MyLink;