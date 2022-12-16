import React from "react";
import Post from "../post/post";
import './posts.css';

export default function Posts({posts}){
    return (
        <div className="posts">
            {posts.map(p=>(
                <Post post={p} key={p._id}/>
            ))}
        </div>
    )
}
