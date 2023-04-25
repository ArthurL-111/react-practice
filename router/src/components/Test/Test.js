import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Test = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        // navigate(window.location.origin);
        // navigate('/test/1');
        navigate('/todo');
    };
    return (
        <>
            <h1>Test: {id}</h1>
            <button onClick={() => handleClick()}>navigate</button>
        </>
    )
};

export default Test;