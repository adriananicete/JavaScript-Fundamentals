export function query(endpoint, callback, options) {
    fetch(`http://localhost:3000/${endpoint}`, options)
        .then(res => res.json())
        .then(json => callback(json, null))
        .catch(err => callback(null, err))
}
