export function addToCart({commit}, amount){
    return commit("addToCart", amount)
}

export function updateFilterStatus({commit}, value){
    return commit("updateFilterStatus", value)
}
