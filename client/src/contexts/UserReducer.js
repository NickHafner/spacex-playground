export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

const logout = () => {
    return { 
        username: '',
        validated: false,
        favoriteLaunches: []
      }
}

const login = (state, username) => {
    return {...state, username: username, validated: true}
}

const addFavorite = (state, favorite) => {
    const newFavs = state.favoriteLaunches ? [...state.favoriteLaunches, favorite] : [ favorite ]
    return {...state, favoriteLaunches : newFavs}
}

const removeFavorite = (state, flight_number) => {
    const newFavs =  state.favoriteLaunches.filter(launch => launch.flight_number !== flight_number)
    return {...state, favoriteLaunches: newFavs}
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return addFavorite(state, action.launch);   
        case REMOVE_FAVORITE:
            return removeFavorite(state, action.flight_number);        
        case LOGIN:
            return login(state, action.username);       
        case LOGOUT:
            return logout();     
        default:
            return state;
    }
}