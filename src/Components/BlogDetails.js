// BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase config

import './blogdetails.css'

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blogs', id); // Fetch the blog based on the ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching document: ', error);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading blog details...</p>;
  }

  return (
    <div className='blog-det-container' >
      {blog ? (
        <>
          <h1 className='blog-det-title' >{blog.title}</h1>
          <img className='blog-det-image' src={blog.image} alt={blog.image}  />
          <p className='blog-det-body'>{blog.body}</p>
          {/* <p className='blog-det-author' >Written by: {blog.author}</p> */}
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};


export default BlogDetails;
