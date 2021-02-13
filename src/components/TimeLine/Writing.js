import React, {useState} from 'react';
import './writing.css';

export function Writing(props){
    const [inputs, setInputs] = useState({
        content: '',
    });

    const onChangeInput = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value});
    };

    const postBtn = () => {
        props.writeFunc(inputs.content);
        setInputs({
            content: '',
        })
    };

    return <>
        <textarea name="content" id="textarea" value={inputs.content} onChange={onChangeInput} cols="30" rows="10"></textarea>
        <button id="button" onClick={postBtn}>POST</button>
        </>;
}