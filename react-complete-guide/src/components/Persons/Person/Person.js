import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and my age is {this.props.age}
        </p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;
