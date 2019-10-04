import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



export default ({muscles, category, onSelect}) =>{
    const index = category
? muscles.findIndex(group => group === category) +1
        : 0;

const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? "" : muscles[index-1]);

    const theme = createMuiTheme({
        palette: {
            primary: { main: "#111" }, // Purple and green play nicely together.
        },
    });

return(
    <ThemeProvider theme={theme}>
    <Paper
    style={
        {
            paddingTop:66,
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
                {muscles.map(group =>
                    <Tab key={group} label={group} />
                )}

            </Tabs>
        </Paper>
    </ThemeProvider>
        )
}
