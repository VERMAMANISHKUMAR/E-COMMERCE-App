import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
 import store from './components/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from react-dom/client
// import { Provider } from 'react-redux';
// import store from './components/store'; // Update your store path accordingly
// import App from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot instead of render
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
