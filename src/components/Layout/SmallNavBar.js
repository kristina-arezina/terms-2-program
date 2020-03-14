import React from 'react';
import {IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SubjectIcon from '@material-ui/icons/Subject';
import HelpIcon from '@material-ui/icons/Help';
import FaceIcon from '@material-ui/icons/Face';


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
                    <ListItemLink href="/journey">
                        <ListItemIcon > <SubjectIcon /></ListItemIcon>
                        <ListItemText  primary={"Programing Journeys"} />
                    </ListItemLink>
                    <ListItemLink href="/women-in-tech">
                        <ListItemIcon> <FaceIcon /></ListItemIcon>
                        <ListItemText  primary={"Women In Technology"} />
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
