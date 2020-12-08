export function addToCart(state, amount){
    state.basketItems = amount
}

export function updateFilterStatus(state, value){
    state.filtersActive = value
}