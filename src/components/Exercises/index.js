import React from "react"
import { Grid, Paper } from "@material-ui/core"



const styles = {
    Paper: {padding:20, margin:10,}
};

export default props =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                Left Pane
        </Paper>

        </Grid>
    <Grid item sm>
        <Paper style={styles.Paper}>
            Right Pane
        </Paper>

    </Grid>
    </Grid>
