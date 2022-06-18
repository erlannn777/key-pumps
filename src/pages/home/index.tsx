import React, { useState } from "react";
import Slider from "./slider";
import slideImg from "../../img/slide.png"
import Why from "./Why";
const Home = () => {
    let [slides, setSlides] = useState([
        { about: "Геотермальный тепловой SGLA GM-10 S (H)  и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2145 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)', img: "../../img/slide.png", id: 1, selected: true },
        { about: "Геотермальный тепловой насос SILA GM-10 S (f) использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2245 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (f)', img: "../../img/slide.png", id: 2, selected: false },
        { about: "Геотермальный тепловой насос SILA GM-10 S (B) предназначен для использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2345 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (B)', img: "../../img/slide.png", id: 3, selected: false },
    ])
    return (
        <div>
            <Slider classess={''} slides={slides} setSlides={setSlides} />
            <Why />
        </div>

    );
};

export default Home;
