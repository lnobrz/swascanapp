import React from 'react';
import Home from './Home';
import Footer from './Footer'
import Menu from './SideComponents/Menu'

/* importing global styled component */
import GlobalStyle from './Styles/GlobalStyle';

/* importing react router dom*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './SideComponents/NotFound';

const App = () => {
  return (
  <BrowserRouter>
    <GlobalStyle />
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </ BrowserRouter>);
};

export default App;
