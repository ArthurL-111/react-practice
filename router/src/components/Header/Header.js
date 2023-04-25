import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import MyLink from '../../router/MyLink';

export const Header = (props) => {
    return (
        <React.Fragment>
            <div className='nav-bar'>
                <li><MyLink to="/dashboard">DashBoard</MyLink></li>
                <li><MyLink to="/todo">TodoList</MyLink></li>
                <li><MyLink to="/test">Test</MyLink></li>
            </div>
        </React.Fragment>
    )
}