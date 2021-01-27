import React, { Component } from 'react';

class MainPageComponent extends Component {
  render() {
    return (
      <div>
        <h2>All Koalas</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Ready for Transfer</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody id="viewKoalas"></tbody>
        </table>
      </div>
    );
  }
}

export default MainPageComponent;
