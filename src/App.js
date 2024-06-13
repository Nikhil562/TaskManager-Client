import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskCreate from './components/TaskCreate';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tasks/:id" element={<PrivateRoute component={TaskDetail} />} />
        <Route path="/tasks" element={<PrivateRoute component={TaskList} />} />
        <Route path="/create-task" element={<PrivateRoute component={TaskCreate} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
