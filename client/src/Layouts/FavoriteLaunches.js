import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core';
import LaunchCard from '../Components/LaunchCard';
import MissionKey from '../Components/MissionKey';
import { UserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    container: {
        color: '#F4F4f4',
        width: '85%',
        margin: '0 auto',
        padding: '1.5rem 1rem 1rem 1rem'
    },
    heading: {
        width: '80%',
        color: '#444444'
    },
    link: {
        position: 'relative',
        alignContent: 'end',
        paddingRight: '.5rem',
        paddingBottom: '.5rem',
        color: '#B19CD9',
        '&:visited': {
            color: '#ffcccb'
        },
        '&:hover': {
            color: '#ffffba'
        }
    }
});

function FavoriteLaunches(){
    const classes = useStyles();
    const [ userState, dispatch ] = useContext(UserContext)
    const history = useHistory();
    
    useEffect(() => {
        if(!userState.validated){
            history.push('/');
        }
    }, [userState.validated])

    console.log(userState)
    if(userState.favoriteLaunches.length < 1) {
        return (
            <div className={classes.container}>
                <Grid container>
                    <Grid item md={9} xs={12}>
                        <Typography variant='h2' component='h1'>
                            No Favorites Found
                        </Typography>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Link to={`/launches`} className={classes.link} >Go back to Launches</Link>
                    </Grid> 
                </Grid>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item md={9} xs={12}>
                    <Typography variant='h2' component='h1'>
                        Favorites
                    </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Link to={`/launches`} className={classes.link} >Go back to Launches</Link>
                </Grid>
                <Grid item md={12}>
                    <MissionKey />
                </Grid>
            </Grid>
            <Grid container>
                {
                    userState.favoriteLaunches.map(launch => {
                        return (
                        <Grid item xs={12} sm={6} md={4}>
                            <LaunchCard key={launch.flight_number} launch={launch} onFavorites={true} />
                        </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default FavoriteLaunches;
