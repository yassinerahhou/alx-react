import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn = true }) {
  return (
    <>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}

      <Footer />
    </>
  );
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
