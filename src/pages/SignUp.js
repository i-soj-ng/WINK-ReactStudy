import React, {useState} from 'react';
import * as api from '../api/server';
import './signup.css';

export function SignUp(props) {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        last_name: '',
        first_name: '',
    });
    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    };
    const join = async () => {
        const {history} = props;
        const token = await api.createUser(input.username, input.email, input.password, input.last_name, input.first_name);
        if(token.non_field_errors) {
            token.non_field_errors.map((e) => alert(e))
        } else {
            console.log(token);
            // history.push('/');
        }
    }
    return (
        <div className="signupBox">
            <h1 id="signupTitle">회원가입</h1>
            <div className="box">
                <div className="IDspace"><h3 id="idText">ID</h3><input type="text" onChange={(e) => setInputData('username', e.target.value)}/></div>
                <div className="emailspace"><h3 id="emailText">E-mail</h3><input type="email" onChange={(e) => setInputData('email', e.target.value)}/></div>
                <div className="PWspace"><h3 id="pwText">Password</h3><input type="password" onChange={(e) => setInputData('password', e.target.value)}/></div>
                <div className="FNspace"><h3 id="fnText">First Name</h3><input type="text" onChange={(e) => setInputData('last_name', e.target.value)}/></div>
                <div className="LNspace"><h3 id="lnText">Last Name</h3><input type="text" onChange={(e) => setInputData('first_name', e.target.value)}/></div>
            </div>
            <button onClick={join}>회원가입</button>
        </div>
    );
}