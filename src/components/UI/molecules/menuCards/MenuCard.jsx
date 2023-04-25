import React from 'react';
import './menuCard.css';
import 'w3-css/w3.css';

const MenuCard = (Props) => {
    return(

        <div className="contentCard w3-col m3">
            <img src={Props.src}></img>
            <p>{Props.name}</p>
        </div>
    )

}
export default MenuCard