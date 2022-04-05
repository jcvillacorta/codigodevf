import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import TaskList from "./scenes/TaskList/TaskList";
import AuthView from "./scenes/AuthView/AuthView";
import './App.css';
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [token, isToken] = useState(null);
  const [name, isName] = useState(null)


  return (
    <div className="app">
    <header className="app-header">
    <Routes>
    <Route path="/" element={<TaskList token={token} name={name} />} />
    <Route path="auth" element={<AuthView setToken={isToken} setName={isName}/>}>
      <Route index element={<Login setToken={isToken} setName={isName} />}/>
      <Route path="login" element={<Login setToken={isToken} setName={isName} />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
    </Routes>
    </header>
    </div>
  );
}

export default App;
