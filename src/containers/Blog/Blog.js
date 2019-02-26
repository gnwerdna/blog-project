import React from 'react'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import classes from './Blog.module.css';
// import FullPost from '../../components/FullPost/FullPost'
// import NewPost from '../../components/NewPost/NewPost'
class Blog extends React.Component {
    render() {
        return (
            <div>
                <section className={classes.Posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        )
    }
}

export default Blog