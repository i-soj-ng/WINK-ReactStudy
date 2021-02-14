import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import * as api from '../api/server';
import {Detail} from '../components/Comments/Detail';
import {WriteComment} from "../components/Comments/WriteComment";

export function TimeLineDetail() {
    const { id } = useParams();
    const [feed, setFeed] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            const server = async () => {
                setFeed(await api.readFeed(id));
                setComments(await api.readComments(id));
            };
            server();
        } else {
            alert('로그인을 해주세요.');
        }
    });

    return <>
        <div>
            <h1>Comments</h1>
            <div>{feed.owner}</div>
            <div>{feed.content}</div>
            <WriteComment p_id={id}
                readComments={api.readComments}
                setComments={setComments}
                writeFunc={api.createComment}
            />
            <Detail comments={comments}/>
        </div>
    </>;
}