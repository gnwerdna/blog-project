import React from 'react'
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css'
class Blog extends React.Component {

    render() {
        return (
            <div>
                <header className={[classes.Blog, "blog"].join(' ')}>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: "#fa923f",
                                        textDecoration: 'underline'
                                    }}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>NEW POST</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        )
    }
}

export default Blog