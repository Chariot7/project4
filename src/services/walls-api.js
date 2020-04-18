import tokenService from '../utils/tokenService';
const BASE_URL = '/api/walls'

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(wall) {
    console.log(wall)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
    },
        body: JSON.stringify(wall)
    }).then(res => res.json())
}

export function update(wall) {
    return fetch(`${BASE_URL}/${wall._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(wall)
    }).then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'Delete'
    }).then(res => res.json())
}