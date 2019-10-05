import React from 'react';
import logo from './logo.svg';
import './App.css';
import People from './def.js';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TasksList from './components/Tasks/Taskslist';

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;

// const useStyles = makeStyles(theme =>({
//   buttom: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'none',
//   },
//   }));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <Grid container spacing = {2}>
        <Grid item xs ={12}>
    <header className="App-header">
      <h2>todolist</h2>
    </header>
    </Grid>
      <Grid item xs = {3}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
     <Route path="/about">
            <About />
          </Route>
          <Route path="/Tasks">
            <Tasks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
    </Grid>
    
    


  
  
    
  /</Grid>/  </div>
  );
}
  

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Tasks() {
  return <h2>task<TasksList/></h2>;
}

/*function People(name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,films) {
  return(
  this.name = name;
  this.height = height;
  this.mass = mass;
  this.hair_color = hair_color;
  this.skin_color = skin_color;
  this.eye_color = eye_color;
  this.birth_year = birth_year;
  this.gender = gender;
  this.homeworld = homeworld;
  this.films = films;
  )
}
*/


export default App;
