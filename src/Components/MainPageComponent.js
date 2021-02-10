import React, { Component } from 'react';
import { FormControlLabel, Switch, TextField } from '@material-ui/core';

//to-do:
//Create koala2.0 database
//Route to koala tables
//associate a click event to ready to transfer
//style header to be persistent
//add sw3 for koala images
//make koala images scalable onclick

class MainPageComponent extends Component {
  state = {
    name: '',
    age: '',
    gender: '',
    RFT: false,
    Notes: '',
  };

  handleInputChangeFor = (property) => (event) => {
    this.setState({
      [property]: event.target.value,
    });
  };

  handleInputChangeForSwitch = (event) => {
    this.setState({
      RFT: !this.state.RFT,
    });
  };

  render() {
    return (
      <div className="formContainer">
        <h2>All Koalas</h2>
        <TextField
          style={{ backgroundColor: 'white' }}
          size="small"
          placeholder="Name"
          type="text"
          name="Koala Name"
          value={this.state.name}
          variant="outlined"
          onChange={this.handleInputChangeFor('name')}
        />
        <TextField
          style={{ backgroundColor: 'white' }}
          size="small"
          placeholder="Age"
          type="text"
          name="Koala Name"
          value={this.state.age}
          variant="outlined"
          onChange={this.handleInputChangeFor('age')}
        />
        <TextField
          style={{ backgroundColor: 'white' }}
          size="small"
          placeholder="Gender"
          type="text"
          name="Koala Name"
          value={this.state.gender}
          variant="outlined"
          onChange={this.handleInputChangeFor('gender')}
        />
        <TextField
          style={{ backgroundColor: 'white' }}
          size="small"
          placeholder="Notes"
          type="text"
          name="Notes"
          value={this.state.notes}
          variant="outlined"
          onChange={this.handleInputChangeFor('notes')}
        />
        <FormControlLabel
          control={
            <Switch
              onChange={this.handleInputChangeForSwitch}
              color="primary"
              name="RFT"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Ready For Transfer?"
        />

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
          <tbody id="viewKoalas">
            <tr>
              <td>Data</td>
              <td>Data2</td>
              <td>Data2</td>
              <td>Data2</td>
              <td>Data2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MainPageComponent;
