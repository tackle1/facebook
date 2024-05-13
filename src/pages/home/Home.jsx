import React from 'react'
import "./Home.css"
import LeftHome from "../../components/home/LeftHome";
import Newsfeed from '../../components/home/newsfeed/NewsFeed';
import RightHome from "../../components/home/RightHome";
const Home = () => {
  return (
    <div className='home-container'>
      <LeftHome />
      <Newsfeed />
      <RightHome />
    </div>


  );
};
export default Home