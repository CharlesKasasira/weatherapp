import React from 'react';
import '../App.css'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item list-items'>
          <h3 className="title">{post.title}</h3>
          <h6>{post.date}</h6>
          <img src={post.img} alt="contribute" className="imagePreview"/>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
