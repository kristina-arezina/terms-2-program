import React, {Component} from 'react';
import {Header} from "../Layout/HeaderFooter.js";
import NestedGrid from "./Grid.js";
import ImageHeader from "./ImageHeader.js"
import {womenJourney, womenJourney2} from "../../storeWomenInTech.js"


export class WomenInTech extends Component {
  state={
      womenJourney
  }

  render(){
    return (
      <div style={{backgroundColor:"#f4f4f4"}}>
      <Header/>
      <ImageHeader/>
      <NestedGrid style={{
          textAlign:"center",
          textTransform: 'uppercase',
          fontFamily:"courier new",
      }}
      womenJourney={womenJourney}
      womenJourney2= {womenJourney2}
      />
      </div>
    )
  }
}

export default WomenInTech;
