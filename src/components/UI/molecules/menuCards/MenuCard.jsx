import React from 'react';

const MenuCard = (Props) => {
    return(

        <div className="contentCard">
            <img src={Props.src}></img>
            <p>{Props.name}</p>
        </div>
    )

}
export default MenuCard