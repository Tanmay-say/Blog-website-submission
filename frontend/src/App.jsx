import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./components/Post Creation/createBlog";
import Allpost from "./components/Home-Blog page/allpost";
import Login from "./components/Login-signup/login";
import Signup from "./components/Login-signup/signup";
import AdminLogin from "./components/Login-signup/adminlogin";
import Singlepost from "./components/Home-Blog page/onepost";
import Admin from "./components/Admin DashBoard/Admin";
import CardList from "./components/Admin DashBoard/CardList";
import BlogList from "./components/Admin DashBoard/BlogList";
import ProfilePage from "./components/Post Creation/profilePage";
import EditProfile from "./components/Post Creation/editProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/" element={<Allpost />} />
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
