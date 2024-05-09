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
              <i className="fa-solid fa-house"></i>
              </Link>
            </th>
            <th>
              <Link to={userProfilePath}>
              <i className="fa-solid fa-house"></i>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navbar;
