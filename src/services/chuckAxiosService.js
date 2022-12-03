import ApiJokes from '../utils/config/axios.chucknorris';

export default function getJokes() {
    return ApiJokes.get('/jokes/random', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    })
}