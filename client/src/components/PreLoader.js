import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/animation";
import "../css/PreLoader.css";
// import logo1 from "../assets/logo1b.png";
import logo2 from "../assets/mbf.png";
function PreLoader()
{

    useEffect(()=>
    {
        preLoaderAnim();
    },[]);
    return(
        <div className="preloader">
            <div className="texts-container">
                <img src={logo2} alt="logo" width="50%" height="50%"></img>
                
            </div>
        </div>
    )
}

export default PreLoader;