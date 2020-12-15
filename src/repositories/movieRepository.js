export default {
    async getMovies(){

        let response = await fetch('http://xmoviesapi.azurewebsites.net/api/Movie')

        return  response.json()
    },

    async getMovie(id){
        console.log('testing');
    },

    async updateMovie(id, movie){
        try {
            await fetch('http://xmoviesapi.azurewebsites.net/api/Movie/'+id, {
                headers: {'Content-Type': 'application/json'},
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(movie)
            })
        }
        catch (e){
            return false
        }
        return true
    },

    async createMovie(movie){
        try {
            await fetch('http://xmoviesapi.azurewebsites.net/api/Movie', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(movie)
            })
        }
        catch (e){

        }
    }
}