import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Home = props => {
    const classes = useStyles();

    return (

        //    <Container disableGutters={false}>
            //    <Card >
                    // <CardContent> 
                     <>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore temporibus, minima praesentium esse iusto omnis sit repellendus pariatur dolores fugit vitae quo animi tempore amet laudantium dicta est quae.
                    </>
                    // </CardContent>
            //    </Card>
        //    </Container>
    );
};

export default Home;