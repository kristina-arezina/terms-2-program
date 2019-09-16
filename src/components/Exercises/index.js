import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"



const styles = {
    Paper: {padding:20, margin:10,}
};

export default ({exercises}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Typography>
                        {group}
                    </Typography>
                )}
        </Paper>

        </Grid>
    <Grid item sm>
        <Paper style={styles.Paper}>
            Right Pane
        </Paper>

    </Grid>
    </Grid>
