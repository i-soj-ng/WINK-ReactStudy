let serverUri = 'https://react-js-sample-api.kmuwink.net';

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
            'Content-Type' : 'application/json',
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

async function readUsers() {
    const response = await fetch(serverUri + '/user/', {
        method: 'get',
    }).then(response => response.json());
    for(let i = 0; i < response.length; i++) {
        if(localStorage.getItem('username') === response[i].username) {
            return i + 1;
        }
    }
}
//회원가입 페이지 만들기