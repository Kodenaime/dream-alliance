// BlogList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase configuration file

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{blog.title}</h3>
          <img src={blog.image} alt={blog.title} style={{ width: '100%' }} />
          <p>{blog.body}</p>
          <p><strong>Author:</strong> {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
