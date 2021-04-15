import React from "react";
import "./home.style.css"
import bgimage from "./Home/Image.png";

function Home() {
    return(
        <div className="img">
            {/* <img scr={bgimage} alt="" /> */}
            <h1 className="slg1">
                Unleash your badminton skills
            </h1>
            <h6 className="slg2">
                Let’s join together today to create a Fabulous tomorrow!
            </h6>
            <button className="btn">
                Join Now
            </button>
       </div>
    );
}

export default Home;
