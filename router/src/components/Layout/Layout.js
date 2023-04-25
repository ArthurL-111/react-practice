import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <Header/>    
            </header>
            {props.children}
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    );
}

export default Layout;