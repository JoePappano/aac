import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/projects/ProjectDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/projects/CreateProject"
import CreateDog from "./components/dogs/CreateDog"
import ManageDogs from "./components/dashboard/ManageDogs"



function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/createDog" component={CreateDog} />
            <Route path="/manageDogs" component={ManageDogs} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
