import React from 'react'
import Post from '../../components/Post/Post'
import axios from 'axios'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import classes from './Blog.module.css';
// import FullPost from '../../components/FullPost/FullPost'
// import NewPost from '../../components/NewPost/NewPost'
class Blog extends React.Component {
    state = {
        posts : []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
        const posts = this.state.posts.map(post => {
            return <Post 
                        title={post.title} 
                        key={post.id}
                        author={post.author}/>
        })
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
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