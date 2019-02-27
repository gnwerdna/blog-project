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
        posts : [],
        selectedPostId: null
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

    selectedPostHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <Post 
                title={post.title} 
                key={post.id}
                author={post.author}
                clicked={() => this.selectedPostHandler(post.id)}/>
        })
        return (
            <div>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/new-post">NEW POST</a></li>
                        </ul>
                    </nav>
                </header>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        )
    }
}

export default Blog