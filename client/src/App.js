import React,{useState} from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CreateUser from './components/CreateUser';
import Users from './components/Users';
import TransactionHistory from './components/TransactionHistory';
import Transfer from './components/Transfer';
import UserProfile from './components/UserProfile';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles/styles.css";

function App() {

  const [oneUser, setOneUser] = useState('hello');

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/createuser" component={CreateUser}/>
        <Route exact path="/users" render = {()=><Users  setOneUser = {setOneUser} /> }/>
        <Route exact path="/history" component={TransactionHistory}/>
        <Route exact path="/transaction" component={Transfer}/>
        <Route exact path="/userprofile" render = {()=><UserProfile oneUser = {oneUser}/> } />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
