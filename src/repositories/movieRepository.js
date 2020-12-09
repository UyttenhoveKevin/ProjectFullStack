export default {
    async getMovies(){

        let response = await fetch('http://xmoviesapi.azurewebsites.net/api/Movie')

        return  response.json()
    }
}