import React, { useState } from "react";
import Slider from "./slider";
import slideImg from "../../img/slide.png"
const Home = () => {
    let [slides, setSlides] = useState([
        { about: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2145 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)', img: "../../img/slide.png", id: 1, selected: true },
        { about: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2245 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)', img: "../../img/slide.png", id: 2, selected: false },
        { about: "Геотермальный тепловой насос SILA GM-10 S (H) предназначен для использования в системах отопления и горячего водоснабжения... Подходит для установки на деревянную/межкомнатную дверь.", price: "2345 000", oldprice: "370 00", name: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-10 S (H)', img: "../../img/slide.png", id: 3, selected: false },
    ])
    return (
        <div>
            <Slider classess={''} slides={slides} setSlides={setSlides} />
        </div>

    );
};

export default Home;
