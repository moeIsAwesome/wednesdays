import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import TwoTeams from './pages/TwoTeams/Index';
import ThreeTeams from './pages/ThreeTeams/index';
import Error from './pages/Error/index';
import { AppProvider } from './context';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="wednesdays" element={<App />} />
          <Route path="wednesdays/twoteams" element={<TwoTeams />} />
          <Route path="wednesdays/threeteams" element={<ThreeTeams />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals(console.log);
