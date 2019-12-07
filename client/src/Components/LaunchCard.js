import React, { useContext, useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../contexts/UserContext';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { ADD_FAVORITE } from '../contexts/UserReducer';

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
        minHeight: '6rem'
    },
    fail: {
        color: '#bb2124'
    },
    success: {
        color: '#22bb33'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    link: {
        paddingRight: '.5rem',
        paddingBottom: '.5rem',
        color: '#B19CD9',
        '&:visited': {
            color: '#ffcccb'
        },
        '&:hover': {
            color: '#ffffba'
        }
    },
    star: {
        paddingRight: '.5rem',
        paddingBottom: '.5rem'
    }
})

function LaunchCard({ launch }) {
    const classes = useStyles();
    const launchSuccessOrFailCss = !launch.launch_success ? classes.fail : classes.success;
    const [ userState, dispatch ] = useContext(UserContext)
    const [favorite, setFavorite] = useState(false);

    const favoriteLaunch = () => {
        setFavorite(true)
        dispatch({ type: ADD_FAVORITE, launch: launch})
    }

    const unFavoriteLaunch = () => {
        setFavorite(false)
    }
    
    return (
       <Card className={classes.card} >
           <CardContent className={classes.content}>
               <Typography className={classes.title}>
                Mission: <span className={launchSuccessOrFailCss}>
                    {launch.mission_name}</span>
               </Typography>
               <Typography>
                Date: <Moment format='DD-MM-YYYY'>
                    {launch.launch_date_local}</Moment>
               </Typography>
           </CardContent>
           <CardActions className={classes.actions}>
               <Link to={`/launch/${launch.flight_number}`} className={classes.link} >Launch Details</Link>
               {favorite ? <StarIcon onClick={unFavoriteLaunch} className={classes.star} /> : 
                    <StarBorderIcon onClick={favoriteLaunch} className={classes.star} />}           
           </CardActions>
        </Card>
    );
}

export default LaunchCard;