import React from "react";
import App from "../App";
import Index from "../index";



function Header() {

return (
    <section className="headerBlock">
        <img src={require("./img/NasaLogo.png")} height='17%' width='17%' />
        <div className="title">Astronomy Photo of the Day</div>
        <div className="contactBox">Call Us: 1800-385-9687</div>
    </section>
    );

};

export default Header;