import React from 'react';
import GlobalStyle from './styles/global'
import Routes from './routes/index'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
      <GlobalStyle/>
    </>
  );
}

export default App;
