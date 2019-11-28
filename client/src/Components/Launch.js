import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'react-moment';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        borderRadius: '1rem',
        background: '#141414',
        margin: '1rem',
        color: '#F4F4f4'
    },
    title: {
        fontSize: 24
    },
    content:{
    },
    fail: {
        color: '#bb2124'
    },
    success: {
        color: '#22bb33'
    },
    button: {
        textTransform: 'none',
        color: '#F4F4f4'   
    }
})

function Launch({ launch }) {
    const classes = useStyles();
    const launchSuccessOrFailCss = !launch.launch_success ? classes.fail : classes.success;

    return (
       <Card className={classes.card} >
           <CardContent>
               <Typography className={classes.title}>
                Mission: <span className={launchSuccessOrFailCss}>
                    {launch.mission_name}</span>
               </Typography>
               <Typography className={classes.content}>
                Date: <Moment format='YYYY-MM-DD HH:mm'>
                    {launch.launch_date_local}</Moment>
               </Typography>
           </CardContent>
           <CardActions>
               <Button className={classes.button} size='small'>Learn More</Button>
           </CardActions>
        </Card>
    );
}

export default Launch;