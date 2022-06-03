import React from 'react';
/* importing global styled component */
import GlobalStyle from './Styles/GlobalStyle';

/* importing main app's jsx components*/
import Header from './Header';
import MainMenu from './MainMenu';
import Footer from './Footer';

const App = () => {
  return <div>
    <GlobalStyle />
    <Header />
    <MainMenu />
    <Footer />
  </div>;
};

export default App;
