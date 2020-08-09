import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
       <nav className = "Menu">
       <Link to="/cadastro/video">
           <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </Link>    
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button> 
        
       </nav>
    );
}
// class as é usado para converter button para a
export default Menu;