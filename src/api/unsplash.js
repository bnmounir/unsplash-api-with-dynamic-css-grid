import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID 7ebdbf23545c74b51c9e5f7309c6e529d92d93becb1572891ab1817e88741705'
    }
});
