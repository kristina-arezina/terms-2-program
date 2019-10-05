import React from 'react';

function AboutHeader(){
    return (

        <header >
                <h1 style={headerStyle}>About Us</h1>
        </header>
    )
}

const headerStyle = {
    background:"#4db6ac",
    color:"#f4f4f4",
    textAlign: "left",
    paddingLeft:"81px",
    paddingTop:"100px",
    paddingBottom:"22px",
    fontSize:"60pt",
    fontFamily:"century gothic",
    fontWeight: "normal",
    margin:"0px",
    display:"Block",
};


export default AboutHeader;