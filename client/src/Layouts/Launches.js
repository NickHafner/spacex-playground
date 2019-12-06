import React, { useEffect, useContext } from 'react';
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo';
import { Typography, Grid } from '@material-ui/core';
import LaunchCard from '../Components/LaunchCard';
import MissionKey from '../Components/MissionKey';
import { UserContext } from '../contexts/UserContext';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
    }
}`;

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
    }
});

function Launches(){
    const classes = useStyles();
    const [ userState, dispatch ] = useContext(UserContext)

    useEffect(() => {
        console.log(`Current user: ${userState.username}`)
        console.log(`User favorite launches: ${userState.username}`)
    }, [userState.favoriteLaunches])

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Typography variant='h2' component='h1'>
                        Launches
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <MissionKey />
                </Grid>
            </Grid>
            <Grid container>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                            if(loading) return <h2>hol up</h2>
                            if(error) return <p>well that's unexpected</p>
                            return(
                                <React.Fragment>
                                    {
                                        data.launches.map(launch => {
                                            return (
                                            <Grid item xs={12} sm={6} md={4}>
                                                <LaunchCard key={launch.flight_number} launch={launch} />
                                            </Grid>
                                            )
                                        })
                                    } 
                                    </React.Fragment>
                            )
                    }
                }
            </Query>
            </Grid>
        </div>
    )
}

export default Launches;
