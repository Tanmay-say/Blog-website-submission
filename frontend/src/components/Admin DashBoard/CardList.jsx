import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './CardList.css';

function CardList() {
  // Sample data for demonstration
  const [filteredUsers, setFilteredUsers] = useState([
    { username: 'user1', postCount: 23 },
    { username: 'user2', postCount: 15 },
    { username: 'user3', postCount: 30 },
  ]);

  const handleSearch = (searchTerm) => {
    const filtered = filteredUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="card-list">
        {filteredUsers.map((user, index) => (
          <div key={index} className="card">
            <h1>{user.username}</h1>
            <p>Number of Posts: {user.postCount}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
