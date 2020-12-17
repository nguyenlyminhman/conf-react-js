import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';


const Demo = props => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>Demo</Paper>
            </Grid>
        </Grid>
    );
};


export default Demo;