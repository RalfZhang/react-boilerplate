import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  // Link,
} from 'react-router-dom';
import App from '../App';
import MyLink from '../components/MyLink';

const RouteNest = props => (
  <Route
    // eslint-disable-next-line
    exact={props.exact}
    path={props.path}
    // eslint-disable-next-line
    render={p => <props.component {...p}  children={props.children} />}
  />
);
RouteNest.propTypes = {
  path: PropTypes.string.isRequired,
};

const Routers = () => (
  <Router>
    <RouteNest path="/" component={App}>
      <RouteNest path="/link" component={MyLink} />
    </RouteNest>
  </Router>
);
export default Routers;
