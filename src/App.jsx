import React from 'react';
import PropTypes from 'prop-types';
import Hello from './containers/Hello';

const App = props => (
  <div>
    <h1>React</h1>
      -----------------------------
    <Hello />
    <div>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
