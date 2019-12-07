export const isInFavorites = (userFavorites, flight_number) => {
    if(userFavorites) return userFavorites.find(launch => launch.flight_number === flight_number) ? true : false
    return false
}