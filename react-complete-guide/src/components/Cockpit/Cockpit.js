import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import logo from '../../assets/logo.svg';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  }, [props.people]);

  let assignedClasses = [];
  let btnClass = '';
  if (props.showPeople) {
    btnClass = classes.red;
  }

  if (props.people.length <= 1) {
    assignedClasses.push(classes.red);
  }
  if (props.people.length > 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <header className={classes.CockpitHeader}>
        <img src={logo} className={classes.CockpitLogo} alt='logo' />
        <h1 className={classes.CockpitTitle}>{props.title}</h1>
      </header>
      <p className={assignedClasses.join(' ')}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        // onClick={switchNameHandler.bind(this, "From button.")}
        onClick={props.clicked}
        className={btnClass}
      >
        Switch names
      </button>
    </div>
  );
};

export default cockpit;
