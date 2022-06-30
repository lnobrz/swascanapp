import React from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer'
import Menu from './Header/HeaderMenu'

/* importing global styled component */
import GlobalStyle from './GlobalStyles/GlobalStyle';

/* importing react router dom*/
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
  <HashRouter>
    <GlobalStyle />
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </ HashRouter>);
};

export default App;
