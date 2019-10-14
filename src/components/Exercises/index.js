import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import {List, ListItem, ListItemText, Link } from '@material-ui/core';
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
    },
    link:{
        marginLeft:20
    },
    p:{
        marginLeft:"5%"
    }
}

export default ({
     link: {
         linkLists: [ ] ,
         videoLists: [ ],
        articles,
        videos
     },
     exercises,
     category,
     onSelect,
     exercise: {
         id,
         title = "Welcome!",
         description ="Please select a term from the list on the left inorder to learn more about it.",
         resourse,
         description2,
     },
}) =>
    <MediaQuery query="(max-width: 758px)">
        {matches =>
            matches ? (
                <Grid container>
                    <Grid item xs={12} >
                        <Paper style={styles.Paper1}>
                            <Typography variant="h3" style={{fontFamily:"century gothic"}}>
                                {title}
                            </Typography>
                            <Typography variant={"body1"} style={{marginTop:20, fontFamily:"century gothic"}}>
                                {description}
                            <br/>
                            <br/>
                                {description2}
                                {resourse}
                            <br/>
                                {description2}
                                {resourse}
                            <br/>
                            <br/>
                                <p style={styles.p}>
                                    {articles}
                                        <br/>
                                        <br/>
                                    {this.linkLists.map(({linkItem}) =>
                                    <Link rel="noopener" variant="body1" href={linkItem} target="_blank">
                                        {linkItem}
                                    </Link>
                                    )}
                                        <br/>
                                        <br/>
                                    {videos}
                                        <br/>
                                        <br/>
                                    {this.videoLists.map(({videoItem}) =>
                                        <Link rel="noopener" variant="body1" href={videoItem} target="_blank">
                                            {videoItem}
                                        </Link>
                                    )}
                                </p>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={styles.Paper2} >
                            {exercises.map(([group, exercises]) =>
                                !category || category === group
                                    ?   <Fragment key={group}>
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
                                )
                            }
                        </Paper>
                    </Grid>
                </Grid>
            ):(
                <Grid container>
                    <Grid item sm={6}>
                        <Paper style={styles.Paper2} >
                            {exercises.map(([group, exercises]) =>
                                !category || category === group
                                    ?
                                        <Fragment key={group}>
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
                                                            }}
                                                        />
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
                                <br/>
                                <p style={styles.p}>
                                    {articles}
                                    <br/>
                                    <br/>
                                    {linkLists.map(({linkItem}) =>
                                        <Link rel="noopener" variant="body1" href={linkItem} target="_blank">
                                            {linkItem}
                                        </Link>
                                    )}
                                    <br/>
                                    <br/>
                                    {videos}
                                    <br/>
                                    <br/>
                                    {videoLists.map(({videoItem}) =>
                                        <Link rel="noopener" variant="body1" href={videoItem} target="_blank">
                                            {videoItem}
                                        </Link>
                                    )}
                                </p>
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
            )
        }
    </MediaQuery>

