import MenuBar from "./components/menubar/MenuBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const user = false;

  return (
    <Router>

    <MenuBar/>

    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register">
        {/* If there is a user logged in, go home. Otherwise, go to register page. */}
        {user ? <Home/> :<Register />}
      </Route>

      <Route path="/login">
        {user ? <Home /> :<Login />}
      </Route>

      <Route path="/settings">
        {user ? <Settings /> :<Login />}
      </Route>

      <Route path="/write">
        {user ? <Write /> :<Login />}
      </Route>

      <Route path="/post/:postId">
        <Single />
      </Route>



    </Switch>
    
    </Router>
  );
}

export default App;
