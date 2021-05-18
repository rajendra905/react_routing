import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import Home from './components/page/Home';
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import AddUser from './components/users/AddUser';
import EditUser from "./components/users/EditUser";
import User from './components/users/User';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <switch >
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/users/adduser" component={AddUser}></Route>
      <Route exact path="/users/edit/:id" component={EditUser}></Route>
      <Route exact path="/users/:id" component={User}></Route>
    </switch>
    
    </Router>
</div>
  );
}

export default App;
