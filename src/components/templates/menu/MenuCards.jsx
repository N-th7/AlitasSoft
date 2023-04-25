import React from 'react';
import MenuCard from '../../UI/molecules/menuCards/MenuCard';
import './menuCards.css'
const MenuCards = () => {
    return(

        <div className="contentMenu w3-row">
            <MenuCard name="Pedido nuevo" src='https://github.com/N-th7/AlitasSoft/blob/main/src/components/UI/atoms/icons/cajero.png?raw=true'></MenuCard>
            <MenuCard name= 'Cerrar caja' src = 'https://github.com/N-th7/AlitasSoft/blob/main/src/components/UI/atoms/icons/money-management.png?raw=true'></MenuCard>
            <MenuCard name= 'Cancelar pedido' src = 'https://github.com/N-th7/AlitasSoft/blob/main/src/components/UI/atoms/icons/archivo.png?raw=true'></MenuCard>
        </div>
    )

}
export default MenuCards
