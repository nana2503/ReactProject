import "./App.scss";
import MyComponent from "./example/ExampleComponent";
import ListTodos from "./Todos/ListTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./navbar/Navbar";
import HomePage from "./navbar/Homepage";
import ListUser from "./Users/ListUser";
import UserDetail from "./Users/UserDetail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/todo">
            <ListTodos />
          </Route>
          <Route path="/Form">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <UserDetail />
          </Route>
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;
