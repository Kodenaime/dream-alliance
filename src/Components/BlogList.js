// BlogList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase configuration file

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogList);
    };
    fetchBlogs();
  }, []);

  
  const handleReadMore = (id) => {
    navigate(`/blog/${id}`); // Navigate to the BlogDetails page with the blog ID
  };


  return (
    
    <section className='container blogs-container'>
        <h2 className='h2'>Blog Posts</h2>
        <div className='blogs'>
        
        {blogs.map((blog) => {
            

            return (
            <div className='blog' key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h3 className='blog-title'>{blog.title}</h3>
                <img className='blog-image' src={blog.image} alt={blog.title} style={{ width: '100%' }} />
                <p>{blog.body.length > 100 ? blog.body.substring(0, 100) + '...' : blog.body}</p>
                
                 <button onClick={() => handleReadMore(blog.id)}>
                 Read More
               </button>
                
                <p className='blog-author'><strong>Author:</strong> {blog.author}</p>
            </div>
            );
        })}
        </div>
    </section>

  
  );
};

export default BlogList;