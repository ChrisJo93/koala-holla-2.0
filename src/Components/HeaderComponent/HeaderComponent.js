import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="headerImg header">
            <h1 className="header">Koala Holla</h1>
            <h3 className="header">1976 Llama Comma Drive</h3>
            <h3 className="header">Walla Walla, WA</h3>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
