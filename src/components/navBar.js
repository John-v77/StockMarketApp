import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';

function navBar(props) {
    return (
        <div id='Header' class="shadow">
            <nav>
                <Link class='text-light navBtn' to="/">Home</Link>
                <Link class='text-light navBtn' to="QuoteDetails">Quote Details</Link>
                <Link class='text-light navBtn' to="MyList">My List</Link>
            </nav>
            
        </div>
    );
}

export default navBar;