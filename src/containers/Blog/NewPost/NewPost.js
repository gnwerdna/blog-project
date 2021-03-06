import React from 'react'
import classes from './NewPost.module.css'
import Axios from 'axios';

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.title,
            author: this.state.title
        }

        Axios.post('/posts/', data)
            .then(res => {
                console.log(res);
            })
    }
    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a post</h1>
                <label>Title</label>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                
                <textarea 
                    rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})}/> 

                <label>Author</label>
                <select 
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>  
                <button onClick={this.postDataHandler}>Add Post</button> 
            </div>
        )
    }
}

export default NewPost