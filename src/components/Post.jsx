import React from 'react'
import { useParams } from 'react-router-dom';

const Post = () => {
    const param = useParams();

    return (
        <>
            <h1> Post {param.id} </h1>
        </>
    );
}


export default Post;