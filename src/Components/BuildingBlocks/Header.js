/* eslint-disable */
import React,{Component} from 'react';
import {NavLink, Route} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <div className="Header">
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
            </div>
        );
    }
}
