import React from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import HelpIcon from '@material-ui/icons/Help';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });


    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button
                >
                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <SubjectIcon /></ListItemIcon>
                    <ListItemText primary={"Programing Journeys"} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon> <HelpIcon /></ListItemIcon>
                    <ListItemText primary={"About"} />
                </ListItem>
            </List>
            <Divider />
        </div>
    );



    return (
        <div>
            <IconButton onClick={toggleDrawer('left', true)}><MenuIcon /></IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}