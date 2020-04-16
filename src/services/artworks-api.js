import tokenService from '../utils/tokenService';
const BASE_URL = '/api/artworks';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(art) {
    console.log(art)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
    },
        body: JSON.stringify(art)
    }).then(res => res.json())
}

export function update(art) {
    return fetch(`${BASE_URL}/${art._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(art)
    }).then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'Delete'
    }).then(res => res.json())
}