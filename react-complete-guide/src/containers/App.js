import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    people: [
      { id: '0', name: 'Leo', age: 41 },
      { id: '1', name: 'Miram', age: 46 },
      { id: '2', name: 'Julia', age: 7 }
    ],
    otherState: 'Blablabla',
    showPeople: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.people.findIndex(element => {
      return element.id === personId;
    });

    const person = { ...this.state.people[personIndex] };
    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({ ...this.state, people });
  };

  deletePersonHandler = index => {
    const updatedPeople = [...this.state.people];
    updatedPeople.splice(index, 1);
    this.setState({ ...this.state, people: updatedPeople });
  };

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  render() {
    console.log('[App.js] render');
    let people = null;
    if (this.state.showPeople) {
      people = (
        <Persons
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
  }
}

export default App;
