import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './PostDetails.css'
import Comments from '../Comments/Comments';


const PostDetails = (props) => {
    const targetId = useParams();
    const [details,setDetails] = useState([]);
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setDetails(data);
        })    
    },[])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => {
            setComments(data);
        })    
    },[])

    let target=[];
    details.map(element => {
        if (element.id == targetId.id){
            target = element
        }
    });
    let targetComments =[];
    comments.map(comment => {
        if (comment.postId == targetId.id){
            targetComments.push(comment);
        }
    });
    
    return (
        <Box>
            <Box className="post-details">
            <h1>{targetId.id} no Post Details</h1>
            <h2>User ID: {target.userId}</h2>
            <h3>Title:{target.title}</h3>
            <p>Description: {target.body}</p>
            </Box>
            <Box>
                <h1 style={{textAlign: 'center', margin:'5px',padding:'5px'}}>Comment Section</h1>
                {targetComments.map(comment => <Comments comment={comment}></Comments>)}
            </Box>
        </Box>
    );
};

export default PostDetails;