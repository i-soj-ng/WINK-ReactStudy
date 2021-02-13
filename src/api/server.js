let serverUri = 'https://react-js-sample-api.kmuwink.net';
const token = window.localStorage.getItem('token');

export async function createFeed(content) {
    const result = await fetch(serverUri + '/feed/', {
        method: 'post',
        headers: {
            Authorization: 'Token ' + token,
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
    });
    console.log(result);
    window.location.reload();
}

export async function createComment(id, content) {
    const result = await fetch(serverUri + '/feed/${id}/comment/', {
        method: 'post',
        headers: {
            Authorization: 'Token ' + token,
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
    });
    console.log(result);
    window.location.reload();
}

export async function readFeeds() {
    const readResult = await fetch(serverUri + '/feed/', {
        method: 'get',
        headers: {
            Authorization: 'Token ' + token,
        },
    });
    const readJson = await readResult.json();
    return readJson.reverse();
}

export async function readFeed(id) {
    const readResult = await fetch(serverUri + '/feed/${id}/', {
        method: 'get',
        headers: {
            Authorization: 'Token ' + token,
        },
    });
    return await readResult.json();
}

export async function readComments(id) {
    const readResult = await fetch(serverUri + '/feed/${id}/comment/', {
        method: 'get',
        headers: {
            Authorization: 'Token ' + token,
        },
    });
    return await readResult.json();
}

export async function createToken(username, password) {
    const response = await fetch(serverUri + '/api-token-auth/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    });
    return await response.json();
}

export async function createUser(username, email, password, last_name, first_name) {
    const response = await fetch(serverUri + '/user/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            last_name: last_name,
            first_name: first_name
        }),
    });
    return await response.json();
}

export async function readUser() {
    const readResult = await fetch(serverUri + '/user/', {
        method: 'get',
    });
    const readJson = await readResult.json();
    return {
        username: readJson.username,
        email: readJson.email,
    };
}