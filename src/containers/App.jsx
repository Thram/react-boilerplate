/**
 * Created by thram on 21/01/17.
 */
import React from 'react';
// Server rendering support
// import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'react-emotion';
import Navigation from '../components/Navigation';
import { content } from '../content';
import Todos from './Todos';
import Mocks from './Mocks';
import Assets from './Assets';
import actions from '../actions/app';
import '../styles/main.css';

const routes = [
  { title: 'Todos', path: '/', component: Todos },
  { title: 'Mocks', path: '/mocks', component: Mocks },
  { title: 'Assets', path: '/assets', component: Assets },
];

const MainContainer = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '2rem',
});
const Container = styled.div({ width: '100%', height: '100%' });

const App = ({ setLanguage }) => (
  <Router>
    <MainContainer>
      <Navigation routes={routes} title={content('app.title')} />
      <div>
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Spanish</button>
      </div>
      <Container>
        {routes.map(props => <Route key={`route_${props.path}`} exact {...props} />)}
      </Container>
    </MainContainer>
  </Router>
);

export default connect(
  ({ app }) => ({ ...app }),
  dispatch => ({
    setLanguage: lang => dispatch(actions.setLanguage(lang)),
  }),
)(App);
