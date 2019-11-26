const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');
const ROOTURL = 'https://api.spacexdata.com/v3/launches';

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
});

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_names: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios
                .get(ROOTURL)
                .then(res => {
                    return res.data
                });
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt } 
            },
            resolve(parent, args) {
                return axios
                .get(`${ROOTURL}/${args.flight_number}`)
                .then(res => { return res.data });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
