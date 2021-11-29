import React from 'react';
import { Banner } from './components/Banner';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu />
    </>
  );
};

// module.exports = App;
export default App;
