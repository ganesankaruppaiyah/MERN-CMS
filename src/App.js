import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import ContactFormPage from './Components/Contacts/Pages/ContactFormPage';
import ContactListPage from './Components/Contacts/Pages/ContactListPage';
import HomePage from './HomePage';
import BlogListPage from './Components/Blog/Pages/BlogListPage';
import BlogEditorPage from './Components/Blog/Pages/BlogEditorPage';

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
        <Route path="/articles" component={BlogListPage}/>
        <Route path="/articles/new" component={BlogEditorPage}/>
        <Route path="/articles/edit/:_id" component={BlogEditorPage}/>
        <Route path="/contacts" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}
export default App;
