
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AppContextProvider from './context/AppContextProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //step 2 --  b) wrap-up inside the function to create context(box) 
  <AppContextProvider>
    <App />

  </AppContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
