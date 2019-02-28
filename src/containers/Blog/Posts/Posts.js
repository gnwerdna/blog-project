import React, { Component } from 'react'
import axios from '../../../axios';
import Post from './../../../components/Post/Post';
import classes from './Posts.module.css';
import { Link } from 'react-router-dom'
class Posts extends Component {
    state = {
        posts: [],
    }

    selectedPostHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Terence'
                    }
                })
                this.setState({
                    posts: updatedPost
                })
                console.log(res);
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}> Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.selectedPostHandler(post.id)} />
                    </Link>
                )
            })
        }
        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts