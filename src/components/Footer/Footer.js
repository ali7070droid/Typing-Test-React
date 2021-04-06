import React from 'react';
import "./Footer.css";

const Footer = () =>  {
    return (
        <div className="footer-container">
            <a
                target="_blank"
                href="https://docs.google.com/document/d/1hd1cSqt-ZjImi7hSX3pIyIOdDo-ln41IGedQAaMOQAA/edit?usp=sharing"
                className="footer-link"
                rel="noreferrer"
            >   
                Link to my Resume!!
            </a>
        </div>
    )
}

export default Footer;