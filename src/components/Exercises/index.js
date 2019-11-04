import React, {Fragment} from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import {List, ListItem, ListItemText, Button } from '@material-ui/core';
import MediaQuery from 'react-responsive';

const styles = {
    Paper1: {
        padding:20,
        margin:10,
        height:"auto",
        overflowY:"auto",
        overflowWrap:" break-word",
        wordWrap: "break-word",
        hyphens: "auto",
        fontFamily:"century gothic"
},
    Paper2: {
        padding:20,
        margin:10,
        maxHeight:500,
        overflowY:"auto",
        overflowWrap:" break-word",
        wordWrap: "break-word",
        hyphens: "auto",
    },
    link:{
        marginLeft:20
    },
    text:{
        marginLeft:"5%"
    }
}

export default ({
     link: {
        link1="https://coder-coder.com/learn-web-development/",
         link2="https://developer.mozilla.org/en-US/docs/Learn",
         link3="https://www.theodinproject.com/courses/web-development-101",
        link4="https://www.impactbnd.com/blog/42-web-development-terms-everyone-should-know",
        video1="https://www.youtube.com/watch?v=7_LPdttKXPc",
        video2="https://www.youtube.com/watch?v=e4S8zfLdLgQ&t=583s",
         video3= "https://www.youtube.com/watch?v=hJHvdBlSxug",
        video4= "https://www.youtube.com/watch?v=J8hzJxb0rpc",
         video5= "https://www.youtube.com/watch?v=Dxcc6ycZ73M",
        articles="Articles",
        videos="Videos",
         link1Name="Learn web development as an absolute beginner (2019)",
         link2Name= "Learn web development by mozilla.org",
         link3Name= "Web Development 101 by The Odin Project",
         link4Name="42 Web Development Terms Everyone Should Know by Melissa Smith",
         video1Name="How the Internet Works in 5 Minutes by Aaron",
         video2Name="How the Internet Works for Developers - Pt 1 - Overview & Frontend by LearnCode.academy",
         video3Name= "How The Web Works - The Big Picture by Academind",
         video4Name="What is the world wide web? - Twila Camp by TED-Ed",
         video5Name="What is the Internet? by Code.org",
     },
     items,
     category,
     onSelect,
     item: {
         id="why learn web basics?",
         title="Why Learn Web Basics?",
         description="If you wish to get into programming probably no one will come up to you and quiz you on these " +
         "terms. However, if you talk to other programmers or read / watch coding tutorials these terms will be " +
         "used constantly and freely. So, it is a good idea to get a general understanding of what these terms and " +
         "concepts mean. By no means do you need to memorize every nook and cranny of theses terms, all you need" +
         " is a working understanding of these concepts in order to be able to follow one's train of thought " +
         "without getting lost in a sea of unknown terms.",
         resourse="Learn more about web basics with these resources:",
         description2,
     },
}) =>
    <MediaQuery query="(max-width: 758px)">
        {matches =>
            matches ? (
                <Grid container>
                    <Grid item xs={12} >
                        <Paper style={styles.Paper1}>

                            <Typography variant="h3">
                                {title}
                            </Typography>
                            <Typography variant={"body1"} style={{marginTop:20}}>
                                {description}
                            <br/>
                            <br/>
                                {description2}
                            <br/>
                                {description2}
                                {resourse}
                            </Typography>
                            <br/>
                            <br/>
                                <Typography style={styles.text}>
                                    {articles}
                                        <br/>
                                        <br/>
                                            <Button rel="noopener" variant="outlined" href={link1} target="_blank" >
                                                {link1Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link2} target="_blank">
                                                {link2Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link3} target="_blank">
                                                {link3Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link4} target="_blank">
                                                {link4Name}
                                            </Button>
                                        <br/>
                                        <br/>
                                    {videos}
                                        <br/>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video1} target="_blank">
                                                {video1Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video2} target="_blank">
                                                {video2Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video3} target="_blank">
                                                {video3Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video4} target="_blank">
                                                {video4Name}
                                            </Button>
                                    <br/>
                                    <Button  rel="noopener" variant="outlined" href={video5} target="_blank">
                                        {video5Name}
                                    </Button>
                                </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={styles.Paper2} >
                            {items.map(([group, items]) =>
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
                                                {items.map(({id, title}) =>
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
                            {items.map(([group, items]) =>
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
                                                {items.map(({id, title}) =>
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

                            <Typography variant="h3">
                            {title}
                            </Typography>

                            <Typography variant={"body1"} style={{marginTop:20}}>
                            {description}
                                <br/>
                                <br/>
                                    {description2}
                                    {resourse}
                            </Typography>
                            <br/>
                                <br/>
                                    <Typography style={styles.text}>
                                        {articles}
                                        <br/>
                                        <br/>
                                        <Button rel="noopener" variant="outlined" href={link1} target="_blank" >
                                            {link1Name}
                                        </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link2} target="_blank">
                                                {link2Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link3} target="_blank">
                                                {link3Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={link4} target="_blank">
                                                {link4Name}
                                            </Button>
                                        <br/>
                                        <br/>
                                            {videos}
                                        <br/>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video1} target="_blank">
                                                {video1Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video2} target="_blank">
                                                {video2Name}
                                            </Button>
                                        <br/>
                                            <Button  rel="noopener" variant="outlined" href={video3} target="_blank">
                                                {video3Name}
                                            </Button>
                                        <br/>
                                        <Button  rel="noopener" variant="outlined" href={video4} target="_blank">
                                            {video4Name}
                                        </Button>
                                        <br/>
                                        <Button  rel="noopener" variant="outlined" href={video5} target="_blank">
                                            {video5Name}
                                        </Button>
                                    </Typography>
                        </Paper>
                    </Grid>
            </Grid>
            )
        }
    </MediaQuery>

