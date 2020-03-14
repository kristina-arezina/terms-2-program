import React, {Component} from 'react';
import {Header} from "../Layout/HeaderFooter.js";
import NestedGrid from "./Grid.js"

export class WomenInTech extends Component {
  render(){
    return (
      <div>
      <Header/>
      <NestedGrid style={{
          paddingTop:500,
          paddingBottom:80,
          textAlign:"center",
          textTransform: 'uppercase',
          backgroundColor:"#f4f4f4",
          fontFamily:"courier new",
      }}/>

      </div>
    )
  }
}

  export default WomenInTech;
