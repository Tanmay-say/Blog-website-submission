import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./Ayush/createBlog";
import Allpost from "./Anushka/allpost";
import Login from "./Girish/login";
import Signup from "./Girish/signup";
import AdminLogin from "./Girish/adminlogin";
import Singlepost from "./Anushka/onepost";
import Admin from "./Tanmay/Admin";
import CardList from "./Tanmay/CardList";
import BlogList from "./Tanmay/BlogList";
import ProfilePage from "./Ayush/profilePage";
import EditProfile from "./Ayush/editProfile";

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
