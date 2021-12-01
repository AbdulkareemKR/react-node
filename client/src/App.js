import "./App.css";
import InformationCard from "./component/InformationCard";
import Registration from "./component/Registration";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <div>
          <nav></nav>
          <Switch>
            <Route path="/registration">{<Registration />}</Route>
            <Route path="/">{<HomePage />}</Route>
          </Switch>
          <Footer />
        </div>
      </Router>
=======
      {/* <InformationCard /> */}
      <Registration />
>>>>>>> parent of de025938 (install react router dom)
    </div>
  );
}

export default App;
