import React from 'react';
import './signup.css';

export function SignUp() {
    return (
        <div className="signupBox">
            <h1 id="signupTitle">회원가입</h1>
            <div className="box">
                <div className="IDspace"><h3 id="idText">ID</h3><input type="text"/></div>
                <div className="emailspace"><h3 id="emailText">E-mail</h3><input type="text"/></div>
                <div className="PWspace"><h3 id="pwText">Password</h3><input type="text"/></div>
                <div className="FNspace"><h3 id="fnText">First Name</h3><input type="text"/></div>
                <div className="LNspace"><h3 id="lnText">Last Name</h3><input type="text"/></div>
            </div>
        </div>
    );
}