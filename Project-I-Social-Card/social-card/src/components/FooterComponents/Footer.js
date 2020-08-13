import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerIcons">
                <i className="far fa-comment"></i>       
            </div>
             <div className="footerIcons">
                <i className="fas fa-sync"></i>
                <span className="numberOfActions">6</span>      
            </div>
             <div className="footerIcons">
                <i className="far fa-heart"></i>     
                <span className="numberOfActions">4</span>    
            </div>
             <div className="footerIcons">
                <i className="far fa-envelope"></i>       
            </div>
        </div>
    )
}