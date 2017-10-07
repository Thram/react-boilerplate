/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
// Server rendering support
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'react-emotion';

const Container = styled.div({ display: 'flex', alignItems: 'center' });
const NavBar = styled.div({ marginLeft: '1rem' });
const AppLink = styled(NavLink)({ padding: '0.2rem 0.5rem' });

const Navigation = ({ title, routes }) => (
  <Container>
    <h2>{title}</h2>
    <NavBar>
      {routes.map(({ path, title: routeTitle }) => (
        <AppLink key={`nav_${path}`} to={path}>
          {routeTitle}
        </AppLink>
      ))}
    </NavBar>
  </Container>
);

export default Navigation;
