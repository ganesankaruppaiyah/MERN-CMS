import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import ContactFormPage from './Components/Contacts/Pages/ContactFormPage';
import ContactListPage from './Components/Contacts/Pages/ContactListPage';
class App extends Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <NavLink className="menu-item" activeClassName="active" exact to="/">
            List of Nerds
          </NavLink>
          <NavLink className="menu-item" activeClassName="active" exact to="/contacts/new">
            Join the Nerd Army
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}
export default App;
