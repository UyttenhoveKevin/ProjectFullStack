export function addToCart(state, amount){
    state.basketItems = amount
}

export function updateFilterStatus(state, value){
    state.filtersActive = value
}

export function setFilters(state, filters){
    state.filters = filters
}