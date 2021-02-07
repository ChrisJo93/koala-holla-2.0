import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="headerImg header headerText">
            <h1 className="headerText">Koala Holla</h1>
            <h3 className="headerText">1976 Llama Comma Drive</h3>
            <h3 className="headerText">Walla Walla, WA</h3>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
