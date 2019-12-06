export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

const logout = (state) => {
    return {...state, username: ""}
}

const login = (state, username) => {
    return {...state, username: username}
}

const addFavorite = (favoriteToAdd, favorites) => {

}

const removeFavorite = (favoriteToRemove, id) => {

}

export const UserReducer = (state, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return removeFavorite(state.favoriteLaunches, action.launch);   
        case REMOVE_FAVORITE:
            return state.favoriteLaunches.filter(launch => launch.id !== action.launchId);        
        case LOGIN:
            return login(state, action.username);       
        case LOGOUT:
            return logout(state);     
        default:
            return state;
    }
}