import React from 'react';
import './style.less'

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <h1>{ this.props.title }</h1>
      </header>
    )
  }
}

export default Header
