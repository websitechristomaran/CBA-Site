import React from "react";
import "./footer.style.css";
import facebook from "../footer/Footer/fb2.png";
import instagram from "../footer/Footer/insta 2.png";
import twitter from "../footer/Footer/twitter2.png";
import youtube from "../footer/Footer/YT2.png";

function Footer() {
    return(
        <footer  >
            <p href="home" className="logo2">Landify</p>
            <p className="dev">© 2021 All rights reserved.<br/> Developed by Skillscy.</p>
            <ul className="icons2">
                <li>
                    <img src={facebook} alt="" />
                </li>
                <li>
                    <img src={instagram} alt="" />
                </li>
                <li>
                    <img src={twitter} alt="" />
                </li>
                <li>
                    <img src={youtube} alt="" />
                </li>
                </ul>

                <div class="dropdown3">
                    <button class="dropbtn3">Connect with us</button>
                    <div class="dropdown-content3">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
        </footer>

    );
}

export default Footer;
