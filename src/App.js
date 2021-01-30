import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Batteries from './components/Batteries';
import Cards from './components/Cards';

const useStyles = makeStyles((theme) => ({
  header: {
    color: "red",
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.header}>Illinois State University Solar Car Team</h1>
      <Cards />
      <Batteries />
    </>
  );
}

export default App;
