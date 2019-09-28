import React from 'react';

function AboutHeader(){
    return (

        <header >
            <div style={{margin:0}}>
                <h1 style={headerStyle}>About Us</h1>
            </div>
        </header>
    )
}

const headerStyle = {
    background:"#4db6ac",
    color:"#ffd0b0",
    textAlign: "left",
    paddingLeft:"81px",
    paddingTop:"100px",
    paddingBottom:"22px",
    fontSize:"60pt",
    fontFamily:"century gothic",
    fontWeight: "normal",
    margin:0,
    display:"Block",
};


export default AboutHeader;