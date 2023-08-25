import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import {useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getUser,loadUser } from "./actions/user";
import AdminPanel from "./Components/Admin/AdminPanel.js"
function App() {
  const {isAuthenticated}=useSelector((state)=>state.login);
  const {loading,user}=useSelector((state)=>state.user);
  console.log(isAuthenticated);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading?<div>loading</div>:<> 
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={isAuthenticated ? <AdminPanel/> :<Login />} />
      </Routes>
      <Footer/></>}
     
    </Router>
  );
}

export default App;
