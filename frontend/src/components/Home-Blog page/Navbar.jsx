import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Check if token is present in localStorage
  const token = localStorage.getItem("token");

  // Define paths based on the presence of the token
  const createBlogPath = token ? "/createblog" : "/login";
  const userProfilePath = token ? "/userprofile" : "/login";

  return (
    <div className="navbar">
      <table>
        <tbody>
          <tr>
            <th>
              <Link to={"/home"}>
              <i className="fa-solid fa-house"></i>
              </Link>
            </th>
            <th>
              <Link to={createBlogPath}>
              <i className="fa-solid fa-plus"></i>
              {/* plus icon */}
              </Link>
            </th>
            <th>
              <Link to={userProfilePath}>
              <i className="fa-solid fa-user"></i>
              {/* user icon */}
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navbar;
