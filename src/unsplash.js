import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID XxOWNS6QF74VQnLAE-tUhcfpXvgdVoHlJw9-qHzhxgM'
    }, 
    params: {
query: term,
per_page: 13
    }
});
    return response.data.results;
}

export default searchImages;