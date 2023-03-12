import React from 'react';
import Logo from './imgs/React-icon.svg.png';

function Header(){
    return(
        <header className="flex">
            <h1>Testes com React</h1>
            <img className="image"src = {Logo} alt='logo'/>
        </header>
    )
}

export default Header;