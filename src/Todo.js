import React, { Component , useState , useEffect} from 'react';
import axios from 'axios';
import Post from './Post';
import PostContext from './PostContext';


   function Todo()  {

       const[posts , setPosts]  = useState([])

    // state = {

    //   posts : [],
    // };

    // componentDidMount() {
    //   axios.get('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => { this.setState({ posts: response.data });});
  
    useEffect(()=> {

      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => { 
        setPosts(response.data );
      });

    },[] )


      return (
        <div>

            {posts.map((post) => (
            <PostContext.Provider value= {{
              post:post,
              key:post.id
            }}>
              <Post></Post>
            </PostContext.Provider>
             ))}


          {/* {this.state.posts.map((post) => (
            <Post 
            post={post} 
            key={post.id} />
          ))} */}
        </div>
      );
    }
    

    export default Todo;