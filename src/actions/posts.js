import axios from 'axios'

export const loadPosts = () => async (dispatch) => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

}