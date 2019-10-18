import React from 'react';
import {Paper,Tabs, Tab} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

export default ({groups, category, onSelect}) => {
    const index = category
    ?
        groups.findIndex(group => group === category) +1
    : 0

const onIndexSelect = (e, index) =>
    onSelect (index === 0 ? "" : groups[index-1]);

    const theme = createMuiTheme({
        palette: {
            primary: { main: "#111" },
        },
    });

    return(
        <ThemeProvider theme={theme}>
            <Paper
                style={{
                paddingTop:80,
                marginTop: 8,
                marginBottom:5,
                backgroundColor:"#e0f2f1"
            }}>
                <Tabs
                    value={index}
                    indicatorColor="primary"
                    onChange={onIndexSelect}
                    variant="scrollable"
                    scrollButtons="auto"
                    style={{color:"#111" }}
                >
                <Tab label="All" />

                {groups.map(group =>
                    <Tab key={group} label={group} />
                )}

                </Tabs>
            </Paper>
        </ThemeProvider>
    )
}
