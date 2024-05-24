import React, { useEffect, useState } from "react";
import "./Home.css";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/newsfeed/NewsFeed";
import RightHome from "../../components/home/RightHome";
import likePages from "../../data/LikePages";
import { getUser } from "../../apis/userRequest";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const data = useSelector((state) => state.userReducer);
  console.log("component Home", data);

  return (
    <>
      <button onClick={handleCreateUser}>Create User</button>
      <Header />
      <div className="home-content">
        <LeftHome />
        <NewsFeed />
        <RightHome />
      </div>
    </>
  );
};

export default Home;