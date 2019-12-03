import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

/**
 * Main component
 * 
 * Contains the App component.
 *
 * @class Main
 * @extends {React.Component}
 */
class Main extends React.Component {
  /**
   * render()
   *
   * @return { ReactDOM.Renderer }
   * @memberof Main
   */
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
