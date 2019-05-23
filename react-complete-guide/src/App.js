import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    people: [
      { id: '0', name: 'Leo', age: 41 },
      { id: '1', name: 'Miram', age: 46 }
    ],
    otherState: 'Blablabla',
    showPeople: false
  };

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
    this.setState({ ...this.state, showPeople: !this.state.showPeople });
  };

  render() {
    //console.log(state.otherState);
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.people.length <= 1) {
      classes.push('red');
    }
    if (this.state.people.length > 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className={classes.join(' ')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={style}
          // onClick={switchNameHandler.bind(this, "From button.")}
          onClick={this.togglePeopleHandler}
        >
          Switch names
        </button>
        {people}
      </div>
    );
  }
}

export default App;
