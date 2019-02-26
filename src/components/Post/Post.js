import React from 'react'
import classes from './Post.module.css'
const post = (props) => {
    return (
        <article className={classes.Post}>
            <h1>{props.title}</h1>
            <div className={classes.Author}>{props.author}</div>
        </article>
    )
}

export default post