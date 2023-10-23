import Home from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import React from 'react';
import { HeaderWrap } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <nav>
        <Home />
        <Movies />
      </nav>
      <button type='button'>Close Modal</button>
    </HeaderWrap>
  );
};

export default Header;
