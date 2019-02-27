import React, { Component } from 'react'
import axios from '../../../axios';
import Post from './../../../components/Post/Post';
import classes from './Posts.module.css';
class Posts extends Component {
    state = {
        posts : [],
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
        // let posts = <p style={{textAlign: 'center'}}> Something went wrong!</p>
        // if(!this.state.error) {
            let posts = this.state.posts.map(post => {
                return <Post 
                    title={post.title} 
                    key={post.id}
                    author={post.author}
                    clicked={() => this.selectedPostHandler(post.id)}/>
            })
        // }
        return(
            <section className={classes.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts