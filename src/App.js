import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Batteries from './components/Batteries';
import Cards from './components/Cards';

const useStyles = makeStyles((theme) => ({
  header: {
    color: "red",
    textAlign: "center",
  },
  map: {
    width: "900px",
    height: "550px",
    frameborder: "0",
    style: "border:0;",
    allowfullscreen: "0",
    ariahidden: "false",
    tabindex: "0",
    margin: theme.spacing(3),
  },
  container: {
    display: "flex",
    alignContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.header}>Illinois State University Solar Car Team</h1>
      <Cards />
      <div className={classes.container}>
        <Batteries />
        <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48551.66014915253!2d-88.99262356679748!3d40.48679508013232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1612033212697!5m2!1sen!2sus"></iframe>
      </div>
    </>
  );
}

export default App;
