import React from "react"
import { Grid } from "@material-ui/core"
import LeftPlane from "./LeftPlane.js"
import RightPlane from "./RightPlane.js"


const styles = {
    Paper: {padding:20, marginTop:10, marginBottom:10}
};

export default props =>
    <Grid container>
        <Grid item sm>
            <LeftPlane styles={styles}/>
        </Grid>
    <Grid item sm>
        <RightPlane styles={styles}/>

    </Grid>
    </Grid>
