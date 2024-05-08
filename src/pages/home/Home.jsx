import React from 'react'
import "./Home.css"
import LeftHome from '../../components/home/LeftHome'
import RightHome from "../../components/home/RightHome"
import Newsfeed from "../../components/home/Newsfeed"
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