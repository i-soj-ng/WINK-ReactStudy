import React from 'react';

export function Comment(props) {
    return <>
        <div>작성자 {props.name}</div>
        <div>내용 {props.body}</div>
    </>;
}