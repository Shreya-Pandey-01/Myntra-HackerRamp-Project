import React from 'react';
import { Link } from 'react-router-dom';
import "./More.css"

const more = () => {
  return (
    <div className='container'>
    
        <div className="box">
            <Link to = "/style-based-collection">
                <h3><b>Style-Based Collection</b></h3>
            </Link>
        </div>

        <div className="box">
            <Link to = "/movie-based-collection">
                <h3><b>Movie-Based Collection</b></h3>
            </Link>
        </div>

        <div className="box">
            <Link to="/social-challenges">
            <h3><b>Fashion Challenges</b></h3>
            </Link>
        </div>

        <div className="box">
            <Link to = "/social-look">
            <h3><b>Social Look-Book</b></h3>
            </Link>
        </div>

        <div className="box">
            <Link to = "/style-feed">
            <h3><b>Style Feed</b></h3>
            </Link>
        </div>

        <div className="box">
            <Link to = "/FashionAI">
                <h3><b>Fashionista ChatAI</b></h3> 
            </Link>
        </div>

    </div>
  );
};

export default more;
