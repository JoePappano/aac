import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Grid from "./components/Grid"
import Home from "./components/Home"
import GridTest from "./components/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/000s" component={Grid}/>
            <Route path="/grid" component={GridTest}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
