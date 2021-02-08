import React, {useState} from 'react';
import './loginpage.css';
import * as api from '../api/server';

export function LoginPage(props) {
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
        // const {history} = props;
        const token = await api.createToken(input.username, input.password);
        if(token.non_field_errors) {
            token.non_field_errors.map((e) => alert(e));
        } else {
            console.log(token)
            localStorage.setItem('token', token);
            localStorage.setItem('username', input.username);
            localStorage.setItem('password', input.password);
        }
    };

    return <>
        <div className="loginBox">
            <h1 id="loginTitle">LOGIN</h1>
            <div className="idSpace"><h1 id="idTitle">ID</h1><input id="idBlank" type="text" onChange={(e) => setInputData(e.target.value)}/></div><br/>
            <div className="pwSpace"><h1 id="pwTitle">PW</h1><input id="pwBlank" type="password" onChange={(e) => setInputData(e.target.value)}/></div>
            <button id="loginButton" onClick={login}>Login</button><br></br>
            <a id="signup" href="/signup">회원가입</a>
        </div>
    </>
}