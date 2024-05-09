import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './BlogList.css'; // Import the CSS file for styling

function BlogList() {
  // Sample data for demonstration
  const [filteredBlogs, setFilteredBlogs] = useState([
    { id: 1, title: 'Blog Title 1', username: 'user1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Blog Title 2', username: 'user2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Blog Title 3', username: 'user3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ]);

  // Function to handle search
  const handleSearch = (searchTerm) => {
    // Filtering blogs based on the username
    const filtered = filteredBlogs.filter((blog) =>
      blog.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div>
      {/* SearchBar component */}
      <SearchBar handleSearch={handleSearch} />

      {/* Blog cards */}
      <div className="blog-list card-list"> {/* Apply the card-list class */}
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card card"> {/* Apply the card class */}
            <h1>{blog.title}</h1>
            <h3>By: {blog.username}</h3>
            <p>{blog.description}</p>
            <div className="buttons">
              <button>View Blog</button>
              <button>Delete Blog</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
