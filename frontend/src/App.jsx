import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./Components/Post Creation/createBlog";
import Allpost from "./Components/Home-Blog page/allpost";
import Login from "./Components/Login-signup/login";
import Signup from "./Components/Login-signup/signup";
import AdminLogin from "./Components/Login-signup/adminlogin";
import Singlepost from "./Components/Home-Blog page/onepost";
import Admin from "./Components/Admin DashBoard/Admin";
import CardList from "./Components/Admin DashBoard/CardList";
import BlogList from "./Components/Admin DashBoard/BlogList";
import ProfilePage from "./Components/Post Creation/profilePage";
import EditProfile from "./Components/Post Creation/editProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/home" element={<Allpost />} />
          <Route exact path="/post/:id" element={<Singlepost />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<ProfilePage />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="manage-users" element={<CardList />} />
            <Route path="manage-posts" element={<BlogList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
