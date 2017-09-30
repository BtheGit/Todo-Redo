import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = props => (
  <div className="notfound-container">
    <div>404: Page Not Found</div>
    <Link to="/" className="notfound-link">Back to Home</Link>
  </div>
)

export default NotFound;