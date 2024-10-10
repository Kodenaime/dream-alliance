// BlogList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase configuration file

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

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

  const toggleReadMore = (id) => {
    setExpandedBlogs(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggles between true and false for the blog id
    }));
  };

  const getTruncatedText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    
    <section className='container blogs-container'>
        <h2 className='h2'>Blog Posts</h2>
        <div className='blogs'>
        
        {blogs.map((blog) => {
            const isExpanded = expandedBlogs[blog.id];
            const bodyToDisplay = isExpanded ? blog.body : getTruncatedText(blog.body, 100); // Limit body to 100 characters
            const shouldShowReadMore = blog.body.length > 50; // Only show "Read More" button if text is long enough

            return (
            <div className='blog' key={blog.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h3 className='blog-title'>{blog.title}</h3>
                <img className='blog-image' src={blog.image} alt={blog.title} style={{ width: '100%' }} />
                <p className='blog-text'>{bodyToDisplay}</p>
                {shouldShowReadMore && (
                <button className='botre' onClick={() => toggleReadMore(blog.id)}>
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
                )}
                <p className='blog-author'><strong>Author:</strong> {blog.author}</p>
            </div>
            );
        })}
        </div>
    </section>

  
  );
};

export default BlogList;
