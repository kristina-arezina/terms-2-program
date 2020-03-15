import React, {Component} from 'react';
import {Header} from "../Layout/HeaderFooter.js";
import NestedGrid from "./Grid.js";
import ImageHeader from "./ImageHeader.js"


export class WomenInTech extends Component {
  render(){
    return (
      <div style={{backgroundColor:"#f4f4f4"}}>
      <Header/>
      <ImageHeader/>
      <NestedGrid style={{
          textAlign:"center",
          textTransform: 'uppercase',
          fontFamily:"courier new",
      }}/>
      </div>
    )
  }
}

  export default WomenInTech;
