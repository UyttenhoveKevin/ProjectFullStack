import store from "@/store";

export default {
    async loginUser(username, password){

        if (username === "" || password === ""){
            return false
        }

        //geen security => geen tijd voor dit deel van backend te doen
        if (username.toLowerCase() === "admin" && password ==="admin"){
            await store.dispatch('setUser', "admin")
            return true
        }
        else if (username.toLowerCase() === "kevin" && password ==="test"){
            await store.dispatch('setUser', "user")
            return true
        }
        else {
            await store.dispatch('setUser', "anonymous")
            return false
        }
    },

    async logout(){
        await store.dispatch('setUser', "anonymous")
    }
}