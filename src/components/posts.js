import React from 'react';
import {Link} from 'react-router-dom';
export default function Posts(){
    return <div>
        <Link to="/create-post" className="aLink">Create New Post</Link>
        <br/>
        <br/>
        <Link to="/all-posts" className="aLink">All Posts</Link>
    </div>
}