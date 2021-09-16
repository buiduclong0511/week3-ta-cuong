import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
                exact
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
