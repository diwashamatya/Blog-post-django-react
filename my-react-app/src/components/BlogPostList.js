import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BlogPostList.css";

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDescription, setNewPostDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = () => {
    axios
      .get("http://localhost:8000/blogs/")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      title: newPostTitle,
      description: newPostDescription,
    };
    axios
      .post("http://localhost:8000/blogs/", newPostData)
      .then((response) => {
        fetchBlogPosts();
        setNewPostTitle("");
        setNewPostDescription("");
        setShowModal(false); // Close the modal after submitting
      })
      .catch((error) => {
        console.error("Error creating blog post:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/blogs/${id}/`)
      .then((response) => {
        fetchBlogPosts();
      })
      .catch((error) => {
        console.error("Error deleting blog post:", error);
      });
  };

  return (
    <div className="body-part">
      <h1 className="title">Blog Posts</h1>
      <div className="btn-div">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          Add Blog
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Create New Post</h2>
            <form className="add-form" onSubmit={handleSubmit}>
              <input
                className="my-input"
                type="text"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Enter title"
              />
              <textarea
                className="my-input "
                value={newPostDescription}
                onChange={(e) => setNewPostDescription(e.target.value)}
                placeholder="Enter description"
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      )}
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>
              <button className="del-btn" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
