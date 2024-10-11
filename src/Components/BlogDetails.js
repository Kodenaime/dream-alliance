// BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase config

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
    <div style={styles.container}>
      {blog ? (
        <>
          <h1 style={styles.title}>{blog.title}</h1>
          <img src={blog.image} alt={blog.title} style={styles.image} />
          <p style={styles.body}>{blog.body}</p>
          <p style={styles.author}>Written by: {blog.author}</p>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  body: {
    fontSize: '1.7rem',
    marginTop: '2rem',
  },
  author: {
    marginTop: '1rem',
    fontStyle: 'italic',
  },
};

export default BlogDetails;
