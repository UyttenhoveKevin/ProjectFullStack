export function addToCart(state, amount){
    state.basketItems = amount
}

export function updateFilterStatus(state, value){
    state.filtersActive = value
}

export function setFilters(state, filters){
    state.filters = filters
}

export function setMenu(state, value){
    state.showMenu = value
}

export function setMovies(state, movies){
    state.movies = movies
}