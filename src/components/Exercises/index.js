import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import MediaQuery from 'react-responsive';

const styles = {
    Paper1: {
        padding:20,
        margin:10,
        height:"auto",
        overflowY:"auto",
        overflowWrap:" break-word",
    wordWrap: "break-word",
    hyphens: "auto"
},
    Paper2: {
        padding:20,
        margin:10,
        maxHeight:500,
        overflowY:"auto",
        overflowWrap:" break-word",
        wordWrap: "break-word",
        hyphens: "auto"
    }}

export default ({
     links,
     exercises,
     category,
     onSelect,
     exercise: {
        id,
        title = "Welcome!",
        description ="Please select a term from the list on the left inorder to learn more about it.",
         link,
         video,
         resourse,
         description2,
     },
}) =>
    <MediaQuery query="(max-width: 758px)">
        {matches =>
            matches ? (<Grid container>
                <Grid item xs={12} >
                    <Paper style={styles.Paper1}>

                        <Typography variant="h3"style={{ fontFamily:"century gothic",}}>
                            {title}
                        </Typography>
                        <Typography variant={"body1"} style={{marginTop:20, fontFamily:"century gothic",}}>
                            {description}
                            <br/>
                            <br/>
                            {description2}
                            {resourse}

                            {links.map(([group,links ]) =>
                                <ul>
                                    <li>
                                        {group}
                                        {links.map(({link1, link2, link3, link4, video1, video2, video3}) =>
                                            <ul>
                                            <li>{link1}</li>
                                            <li>{link2}</li>
                                            <li>{link3}</li>
                                            <li>{link4}</li>
                                            <li>{video1}</li>
                                            <li>{video2}</li>
                                            <li>{video3}</li>
                                        </ul>
                                        )}
                                    </li>
                                </ul>
                            )}

                            <br/>
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
                <Grid item xs={12} >
                    <Paper style={styles.Paper2} >
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
                                                <ListItemText
                                                    primary={title}
                                                    style={{
                                                        fontFamily:"century gothic",
                                                    }}/>
                                            </ListItem>
                                        )}
                                    </List>
                                </Fragment>
                                : null
                        )}
                    </Paper>

                </Grid>

            </Grid>): (
                <Grid container>
                    <Grid item sm={6}>
                        <Paper style={styles.Paper2} >
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
                                                    <ListItemText

                                                        primary={title}
                                                        style={{
                                                            fontFamily:"century gothic"
                                                        }}/>
                                                </ListItem>
                                            )}
                                        </List>
                                    </Fragment>
                                    : null
                            )}
                        </Paper>
                    </Grid>
                <Grid item sm={6}>
                    <Paper style={styles.Paper1} >

                        <Typography variant="h3"style={{ fontFamily:"century gothic",}}>
                            {title}
                        </Typography>
                        <Typography variant={"body1"} style={{marginTop:20, fontFamily:"century gothic",}}>
                            {description}
                            <br/>
                            <br/>
                            {description2}
                            {resourse}

                            <br/>
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
            </Grid>) }</MediaQuery>

