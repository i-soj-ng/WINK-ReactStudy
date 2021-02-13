import React, {useEffect, useState} from 'react';
import {Writing} from '../components/TimeLine/Writing';
import {Timeline} from '../components/TimeLine/Timeline';
import {createFeed, readFeeds} from '../api/server';
import {useHistory} from "react-router";

export function TimeLinePage(props) {
    const [feeds, setFeeds] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const server = async () => {
                setFeeds(await readFeeds());
            };
            server();
        } else {
            alert('로그인을 해주세요.');
        }
    }, []);

    return <>
        <Writing
            readFeed={readFeeds}
            setFeeds={setFeeds}
            createFeed={createFeed}
        />
        <Timeline
            feeds = {feeds}
        />
    </>;
}