import React from 'react';
import Navbar from './Navbar';
import "../components/Header.css"
import HeaderIntroduction from './HeaderIntroduction';


export const Header = () => {
    return (
        <header>
            <Navbar />
            <HeaderIntroduction />
        </header>
    )
}
export default Header
