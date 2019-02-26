import React from 'react'
import classes from './Post.module.css'
const post = (props) => {
    return (
        <article className={classes.Post}>
            <h1>Title</h1>
            <div className={classes.Author}>Author</div>
        </article>
    )
}

export default post