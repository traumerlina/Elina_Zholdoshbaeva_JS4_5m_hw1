import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from './pages/users/Users';


function App() {
  const dispatch = useDispatch();
  const title = useSelector(state => state.title)
  const count = useSelector(state => state.count)
  const changeTitle = () => {
    dispatch({type:"CHANGE_TITLE"})
  } 
  const increment = () => {
    dispatch({type:"INCREMENT"})
  }
  const titleWithParams = () => {
    dispatch({type:"TITLE_WITH_PARAMS", payload:"elina"})
  }
  return (
    <div className="App">
      <h1>Redux</h1>
      <h2>{title}</h2>
      <h3>{count}</h3>
      <button onClick={changeTitle}>change title</button>

      <button onClick={increment}>count increment</button>

      <button onClick={titleWithParams}>change title with params</button>

      <h1>--------------</h1>
      <Users/>
    
    </div>
  );
}

export default App;
