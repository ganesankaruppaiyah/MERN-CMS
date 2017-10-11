import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import UserFormPage from './Components/Users/Pages/UserFormPage';
import UserListPage from './Components/Users/Pages/UserListPage';
import HomePage from './HomePage';
import BlogListPage from './Components/Blog/Pages/BlogListPage';
import BlogPostPage from './Components/Blog/Pages/BlogPostPage';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <NavLink className="menu-item" activeClassName="active" exact to="/">
          home
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/users">
            users
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/users/new">
            new user
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/articles">
            articles
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/articles/new">
            new article
          </NavLink>
        </div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/articles" component={BlogListPage}/>
        <Route exact path="/articles/new" component={BlogPostPage}/>
        <Route exact path="/articles/edit/:_id" component={BlogPostPage}/>
        <Route exact path="/users" component={UserListPage}/>
        <Route exact path="/users/new" component={UserFormPage}/>
        <Route exact path="/users/edit/:_id" component={UserFormPage}/>
      </Container>
    );
  }
}
export default App;
