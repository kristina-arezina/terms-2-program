import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import HelpIcon from '@material-ui/icons/Help';


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function TemporaryDrawer() {
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
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
                <List component="nav">
                     <ListItemLink href="/">
                        <ListItemIcon > <HomeIcon/></ListItemIcon>
                        <ListItemText  primary={"Home"} />
                    </ListItemLink>
                    <ListItemLink href="/journey">
                        <ListItemIcon > <SubjectIcon /></ListItemIcon>
                        <ListItemText  primary={"Programing Journeys"} />
                    </ListItemLink>
                    <ListItemLink href="/about">
                        <ListItemIcon> <HelpIcon /></ListItemIcon>
                        <ListItemText  primary={"About"} />
                    </ListItemLink>
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