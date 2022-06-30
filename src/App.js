import React from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer'
import Menu from './Header/HeaderMenu'

/* importing global styled component */
import GlobalStyle from './GlobalStyles/GlobalStyle';

/* importing react router dom*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
  <BrowserRouter>
    <GlobalStyle />
    <Menu />
    <Routes>
      <Route path='/swascanapp/' element={<Home />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </ BrowserRouter>);
};

export default App;
