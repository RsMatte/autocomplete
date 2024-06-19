import { Post } from "../components/autocomplete/types";

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const limit = 5;

const fetchPosts = async (text: string): Promise<Post[]> => {
  return fetch(`${apiUrl}?title_like=${text}&_limit=${limit}`)
    .then(response => {
      if (response.status !== 200) throw new Error('error fetching posts');
      return response.json();
    })
    .catch(e => { throw e });
} 

export default fetchPosts;
