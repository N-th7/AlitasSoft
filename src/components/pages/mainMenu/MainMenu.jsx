import React from 'react';
import MenuCards from '../../templates/menu/MenuCards';
import './mainMenu.css'
import Navbar from '../../templates/navbar/Navbar';
const MainMenu = () => {
    return(

        <div className="contentMain">
            <Navbar></Navbar>
            <MenuCards></MenuCards>
        </div>
    )

}
export default MainMenu
