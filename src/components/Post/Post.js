import React from 'react';
import { Button,Box } from '@material-ui/core';
import './Post.css'
import PostDetails from '../PostDetails/PostDetails';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id, userId, title, body} = props.post;
    const target = props.post;
    
    return (
        <Box p={6}>
            <h1>Post No: {id}</h1>
            <h2>User Id : {userId}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={'/post/'+id}>
                <Button onClick = {() =><PostDetails></PostDetails>} variant="contained" color="primary">See More</Button>
            </Link>
               
        </Box>
    );
};

export default Post;