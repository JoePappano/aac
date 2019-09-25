import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
// import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from "./components/projects/ProjectDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateProject from "./components/projects/CreateProject"
import CreateDog from "./components/dogs/CreateDog"
import ManageDogs from "./components/dashboard/ManageDogs"
import DogDetails from "./components/dogs/DogDetails"
import QueryBox from "./components/dashboard/QueryBox"
// import DogDetails2 from "./components/dogs/DogDetails2"



function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={ManageDogs} exact/>
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/dog/:id" component={DogDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/createDog" component={CreateDog} />
            <Route path="/manageDogs" component={ManageDogs} />
            <Route path="/queryDogs" component={QueryBox} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
