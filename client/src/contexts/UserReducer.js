export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

const logout = (state) => {
    return {...state, username: ""}
}

const login = (state, username) => {
    return {...state, username: username, validated: true}
}

const addFavorite = (state, favorite) => {
    const newFavs = state.favoriteLaunches ? [...state.favoriteLaunches, favorite] : [ favorite ]
    console.log(newFavs)
    return {...state, favoriteLaunches : newFavs}
}

const removeFavorite = (favoriteToRemove, id) => {

}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return addFavorite(state, action.launch);   
        case REMOVE_FAVORITE:
            return {...state, favoriteLaunches: state.favoriteLaunches.filter(launch => launch.id !== action.launchId)};        
        case LOGIN:
            return login(state, action.username);       
        case LOGOUT:
            return logout(state);     
        default:
            return state;
    }
}