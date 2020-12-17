import React from 'react';
import { Grid, Paper } from '@material-ui/core';


const Home = props => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>xs=12</Paper>
            </Grid>
        </Grid>
    );
};

export default Home;