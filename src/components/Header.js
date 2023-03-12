import React from 'react';
import Logo from './imgs/musically.png';

function Header(){
    return(
        <header>
            <h1>CFB Cursos</h1>
            <img src = {Logo} alt='logo'/>
        </header>
    )
}

export default Header;