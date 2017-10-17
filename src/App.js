/* eslint-disable */
import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import UserFormPage from './Components/Users/Pages/UserFormPage';
import UserListPage from './Components/Users/Pages/UserListPage';
import HomePage from './HomePage';
import BlogListPage from './Components/Blog/Pages/BlogListPage';
import BlogPostPage from './Components/Blog/Pages/BlogPostPage';
import Header from './Components/BuildingBlocks/Header';
import Footer from './Components/BuildingBlocks/Footer';
import Left from './Components/BuildingBlocks/Left';
import Right from './Components/BuildingBlocks/Right';

class App extends Component {
  render() {
    return (<Container>
        <Header />
        <div id="wrapper">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/articles" component={BlogListPage}/>
        <Route exact path="/articles/new" component={BlogPostPage}/>
        <Route exact path="/articles/edit/:_id" component={BlogPostPage}/>
        <Route exact path="/users" component={UserListPage}/>
        <Route exact path="/users/new" component={UserFormPage}/>
        <Route exact path="/users/edit/:_id" component={UserFormPage}/>
        </div>
        <Left />
        <Right />
        <Footer />
      </Container>
    );
  }
}
export default App;
