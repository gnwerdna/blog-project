import React from 'react'
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route} from 'react-router-dom';
class Blog extends React.Component {

    render() {        
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
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        )
    }
}

export default Blog