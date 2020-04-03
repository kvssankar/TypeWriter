import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import SVG from '../assests/landingicon.svg';
import {Link} from 'react-router-dom';
import '../css/landing.css';
const Landing=()=>{
    return(
        <div className="landing">
            <div className="bg"></div>
            <div className="parent">
            <div className="content">
            <div class="jumbotron">
            <h1 class="display-4"><ReactRotatingText typingInterval={100} items={['Learn Typing Hastle free', 'Free typing practice', 'Beginner to advanced']} /></h1>
            <p className="lead">If you type adeptly with 10 fingers, you're typing faster than your mind is working.
            </p>
            <Link className="btn btn-primary btn-lg" to="/start">Start Now</Link>
            </div>
            </div>
            <img src={SVG} alt=""/>
            </div>
        </div>
    );
}

export default Landing;