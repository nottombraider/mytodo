import React from 'react';
import ReactDOM from 'react-dom';
import cogoToast from 'cogo-toast';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import App from './Components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register({
  onUpdate: () => {
    cogoToast.info(
      'UPDATES. Restart application to receive latest features',
    );
  },
  onSuccess: () => {
    cogoToast.info(
      'Application is successfully updated',
    );
  },
});
window.appVersion = 1;
