import React from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const LAUNCH_QUERY = gql`
    query LauchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

function Launch(props){
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number);
    return (
        <React.Fragment>
            <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h2>hol up</h2>
                        if(error) return <p>well that's unexpected</p>
                        const {launch} = data;
                        const {rocket} = launch;
                        console.log(launch);
                        console.log(rocket);
                        
                        return (
                            <p>hey</p>
                        )
                    }
                }
            </Query>
        </React.Fragment>
    )
}

export default Launch;