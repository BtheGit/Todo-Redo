import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = props => (
  <div className="home-container">
    <div>HOME</div>
    <Link to="/todolist">TodoList</Link>
    <Link to="/about">About</Link>
  </div>
)

export default Home;