import React from 'react';
import './mainpage.css';

export function MainPage() {
    return (
        <header>
            <h1 id='title'>HAPPY WINK..^^</h1>
            <a id='main' href="/">Main</a>
            <a id='timeline' href="/timeline">Timeline</a>
            <a id='mypage' href="/mypage">My page</a>
            <a id='login' href="/login">Login</a>
        </header>
    );
}