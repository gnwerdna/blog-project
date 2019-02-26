import React from 'react'
import classes from './FullPost.module.css';

class FullPost extends React.Component {
    render() {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className={classes.FullPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className={classes.Edit}>
                    <button className={classes.Delete}>Delete</button>
                </div>
            </div>
        );
        return post;
    }
}

export default FullPost