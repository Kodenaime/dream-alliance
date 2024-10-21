// BlogForm.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase'; // Firebase configuration file
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase storage functions
import { v4 as uuidv4 } from 'uuid'; // For generating unique filenames

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('')
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null); // For the uploaded image file
  const [imageUrl, setImageUrl] = useState(''); // To store the image URL after upload
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please wait for the image to upload before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        body,
        // date,
        author,
        image: imageUrl, // Store the image URL in Firestore
      });
      alert('Blog post added successfully!');
      setTitle('');
      setBody('');
      setAuthor('');
      setImage(null);
      setImageUrl('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    setIsUploading(true);
    const imageRef = ref(storage, `blogImages/${uuidv4()}`); // Create a unique filename
    try {
      // Upload the image file to Firebase Storage
      await uploadBytes(imageRef, file);
      // Get the download URL for the uploaded image
      const downloadURL = await getDownloadURL(imageRef);
      setImageUrl(downloadURL); // Store the image URL
      setIsUploading(false);
    } catch (error) {
      console.error('Error uploading image: ', error);
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.creatorcontainer}>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={formStyles.textarea}
        />
      </div>
      {/* <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          // required
          style={formStyles.input}
        />
      </div> */}
      {/* <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={formStyles.input}
        />
      </div> */}
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label}>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          // required
          style={formStyles.input}
        />
      </div>
      {isUploading && <p>Uploading image, please wait...</p>}
      <button type="submit" style={formStyles.button} disabled={isUploading}>
        Submit
      </button>

      <a href="/blogs" className="non btn-primary">Back to blogs</a>
    </form>
  );
};

const formStyles = {
  creatorcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginTop: '5rem',
  },
  inputGroup: {
    margin: '10px 0',
    width: '100%',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    resize: 'vertical',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
  },
};

export default BlogForm;
