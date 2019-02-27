import React from 'react'
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
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
                <Posts/>
            </div>
        )
    }
}

export default Blog