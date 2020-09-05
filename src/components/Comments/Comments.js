import React from 'react';
import { Box } from '@material-ui/core';
import './Comments.css'

const Comments = (props) => {
    const {name,email,body} = props.comment;
    return (
        <Box className="comment-style">
            <h3> Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>{body}</p>
        </Box>
    );
};

export default Comments;