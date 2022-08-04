import React from 'react';

/* importing global styled component */
import GlobalStyle from './Global/GlobalStyle';

/* importing react router dom and routes*/
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from './Header/HeaderMenu';
import Home from './Home/Home';
import Characters from './Characters/Characters';
import Movies from './Movies/Movies';
import Planets from './Planets/Planets';
import Species from './Species/Species';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import { GlobalStorage } from './Global/GlobalComponents';

const App = () => {
  return (
  <HashRouter>
    <GlobalStyle />
    <GlobalStorage>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Characters' element={<Characters />}/>
      <Route path='/Movies' element={<Movies />}/>
      <Route path='/Planets' element={<Planets />}/>
      <Route path='/Species' element={<Species />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </ GlobalStorage>
  </ HashRouter>
  );
};

export default App;
