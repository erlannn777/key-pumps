import React from "react";
import cl from "./header.module.css";
import { FiChevronDown } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5"

const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.headerPromo}></div>
            <nav className={cl.nav}>
                <ul className={cl.navList}>
                    <li className={cl.navListItem}><img className={cl.navListLogo} src="" alt="" /></li>
                    <li className={cl.navListItem}>Главная</li>
                    <li className={cl.navListItem}>Каталог <FiChevronDown /></li>
                    <li className={cl.navListItem}>О нас</li>
                    <li className={cl.navListItem}>Еще <FiChevronDown /></li>
                    <li className={cl.navListItem + " " + cl.search}><IoSearchOutline /><form action=""><input type="text" className={cl.navListItemInput} /><button>Поиск</button></form></li>
                    <li className={cl.navListItem}></li>
                    <li className={cl.navListItem}></li>
                    <li className={cl.navListItem}></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
