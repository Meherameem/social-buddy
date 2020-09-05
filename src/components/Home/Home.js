import React, { useState, useEffect} from 'react';
import Post from '../Post/Post';
import { Box} from '@material-ui/core';

const Home = () => {
    const [posts,setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    })    
  },[])


  const headingStyle = {
    textAlign:'center',
    margin:'10px',
    padding:'10px',
    color:'tomato',
  }
    return (
          <Box>
            <h1 style={headingStyle}>Social Posts</h1>
            <Box>
              {posts.map(post =><Post key={post.id} post={post}></Post>)}
            </Box>
        </Box>
    );
};

export default Home;