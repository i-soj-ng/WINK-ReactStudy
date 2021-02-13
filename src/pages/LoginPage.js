import React, {useState} from 'react';
import './loginpage.css';
import * as api from '../api/server';
import {useHistory} from 'react-router';

export function LoginPage(props) {
    const history = useHistory();
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    }

    const login = async () => {
        const token = await api.createToken(input.username, input.password);
        if(token.non_field_errors) {
            token.non_field_errors.map((e) => alert(e));
        } else {
            console.log(token)
            localStorage.setItem('token', token.token);
            localStorage.setItem('username', input.username);
            history.push('/timeline');
        }
    };

    return <>
        <div className="loginBox">
            <h1 id="loginTitle">LOGIN</h1>
            <div className="idSpace"><h1 id="idTitle">ID</h1><input id="idBlank" type="text" onChange={(e) => setInputData('username', e.target.value)}/></div><br/>
            <div className="pwSpace"><h1 id="pwTitle">PW</h1><input id="pwBlank" type="password" onChange={(e) => setInputData('password', e.target.value)}/></div>
            <button id="loginButton" onClick={login}>Login</button><br></br>
            <a id="signup" href="/signup">회원가입</a>
        </div>
    </>
}