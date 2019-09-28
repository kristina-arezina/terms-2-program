import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const styles = {
    Paper: {
        padding:20,
        margin:10,
        height:500,
        overflowY:"auto",
    }
}

export default ({
     exercises,
     category,
     onSelect,
     exercise: {
        id,
        title = "Welcome!",
        description ="Please select an exerise from the list on the left.",
         link,
         video,
         resourse,
         description2,
         image,
     },
    onDelete
}) =>
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper style={styles.Paper} >
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ? <Fragment key={group}>
                            <Typography variant={"h6"}
                                        style={{
                                            textTransform: 'uppercase',
                                            color:"#00867d",
                                            fontFamily:"courier new",
                                        }}
                            >
                                {group}
                            </Typography>
                            <List component="ul" >
                                {exercises.map(({id, title}) =>
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title}/>
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={() => onDelete(id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}

            </Paper>

        </Grid>
    <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
            <Typography variant="h3">
                {title}
            </Typography>
            <Typography variant={"body1"} style={{marginTop:20, fontFamily:"century gothic",}}>
                {description}
                <br/>
                <br/>
                {description2}
                {resourse}
                <br/>
                <Card >
                        <CardMedia
                            image="/Users/milanarezina/code-realm/src/img/Netflix_Logo_PMS.png"
                            title="Contemplative Reptile"
                        />
                </Card>
                    <ul>
                        <li>
                            <Link rel="noopener" variant="body1" href={link} target="_blank">
                            {link}
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener" variant="body1" href={video} target="_blank">
                                {video}
                            </Link>
                        </li>
                    </ul>
            </Typography>

        </Paper>

    </Grid>
    </Grid>
