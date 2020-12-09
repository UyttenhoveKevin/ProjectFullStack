export function addToCart({commit}, amount){
    return commit("addToCart", amount)
}

export function updateFilterStatus({commit}, value){
    return commit("updateFilterStatus", value)
}

export function setFilters({commit}, filters){
    return commit("setFilters", filters)
}

export function setMenu({commit}, value){
    return commit("setMenu", value)
}

export function setMovies({commit}, movies){
    return commit("setMovies", movies)
}