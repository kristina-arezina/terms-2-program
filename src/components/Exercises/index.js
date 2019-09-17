import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import {exercises} from "../../store";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const styles = {
    Paper: {padding:20, margin:10,},
    Typography: {textTransform: "capitalize"}
};

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default ({exercises}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography >
                            {group}
                        </Typography>
                        <List component="ul" >
                            {exercises.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}

                        </List>
                    </Fragment>
                )}

            </Paper>

        </Grid>
    <Grid item sm>
        <Paper style={styles.Paper}>
            Right Pane
        </Paper>

    </Grid>
    </Grid>
