// BlogManagement.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase configuration file

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const blogDocRef = doc(db, 'blogs', id);
    try {
      await deleteDoc(blogDocRef);
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove blog from local state after deletion
      alert('Blog deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <section className='section container blogs-container'>
        <h2>Manage Blogs</h2>
        <div className='blogs'>
        
        {blogs.length > 0 ? (
            blogs.map((blog) => (
            <div className='blog' key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h3 className='blog-title'>{blog.title}</h3>
                <img className='blog-image' src={blog.image} alt={blog.title} style={{ width: '100%' }} />
                <p>{blog.body.length > 100 ? blog.body.substring(0, 100) + '...' : blog.body}</p>
                <p className='blog-text'><strong>Author:</strong> {blog.author}</p>
                <button className='btn' onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
            ))
        ) : (
            <p>No blogs available to manage.</p>
        )}
        </div>
        <a href="/blogs" className="non btn-primary">Back to blogs</a>
    </section>
    
  );
};

export default BlogManagement;
