import React from 'react'
import classes from './FullPost.module.css';
import Axios from 'axios';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                Axios.get('/posts/' + this.props.id)
                    .then(res => {
                        this.setState({
                            loadedPost: res.data
                        })
                    })
            }
        }
    }

    deletePostHandler = () => {
        Axios.delete('/posts/' + this.props.id)
            .then(res => {
                console.log('delete success')
            })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>loading...</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>Content</p>
                    <div className={classes.Edit}>
                        <button 
                            className={classes.Delete}
                            onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost