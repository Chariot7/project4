const BASE_URL = '/api/artists';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(artist) {
    console.log(artist)
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(artist)
    }).then(res => res.json())
}

export function update(artist) {
    return fetch(`${BASE_URL}/${artist._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(artist)
    }).then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'Delete'
    }).then(res => res.json())
}