import React from 'react';
import { UlWrapper, LiWrapper } from './style';
import { NavLink } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <UlWrapper>
        <LiWrapper><NavLink to="/movie">电影</NavLink></LiWrapper>
        <LiWrapper><NavLink to="/cinema">影院</NavLink></LiWrapper>
        <LiWrapper><NavLink to="/content">我的</NavLink></LiWrapper>
      </UlWrapper>
    )
  }
}

export default Footer;
