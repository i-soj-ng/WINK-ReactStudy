import React, { useState } from 'react';

export function WriteComment(props) {
    const [inputs, setInputs] = useState({
        content: '',
    });

    const onChangeInput = e => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    const postBtn = () => {
        props.writeFunc(props.p, inputs.content);
        setInputs({
            content: '',
        })
    };

    return (
        <div>
            <textarea name="content" id="" value={inputs.content} onChange={onChangeInput} cols="30" rows="10"></textarea>
            <button onClick={postBtn}>POST</button>
        </div>
    )
}