import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import ContactFormPage from './Components/Contacts/Pages/ContactFormPage';
import ContactListPage from './Components/Contacts/Pages/ContactListPage';
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
          <NavLink className="menu-item" activeClassName="active" exact to="/contacts">
            contacts
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/contacts/new">
            new contact
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
        <Route exact path="/contacts" component={ContactListPage}/>
        <Route exact path="/contacts/new" component={ContactFormPage}/>
        <Route exact path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}
export default App;
