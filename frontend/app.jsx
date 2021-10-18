import React from "react";
import JohnSmith from "./components/JohnSmith";
import { Switch, Route } from 'react-router-dom';


const App = () => (
  <div>
    <Switch>
      <Route path="/*">
      <JohnSmith />
      </Route>
    </Switch>
  </div>
);

export default App;