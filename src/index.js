import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.less';
import './assets/js/rem.js';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
