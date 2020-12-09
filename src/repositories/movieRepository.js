export default {
    async getMovies(){

        let response = await fetch('http://xmoviesapi.azurewebsites.net/api/Movie')

        return  response.json()
    },

    async getMovie(id){
        console.log('testing');
    },

    async updateMovie(id, movie){
        let response = await fetch('http://xmoviesapi.azurewebsites.net/api/Movie/5fd0ff980011fbc69e2117f8', {
            method: 'PUT',
            body: JSON.stringify(movie)
        })

        return response.json()
    }
}