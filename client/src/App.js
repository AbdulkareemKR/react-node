import "./App.css";
import InformationCard from "./component/InformationCard";
import Registration from "./component/Registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <InformationCard /> */}
      <Registration />{" "}
      <Router>
        <div>
          <nav></nav>
          <Switch>
            <Route path="/registration">{/* <RegistrationPage /> */}</Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
