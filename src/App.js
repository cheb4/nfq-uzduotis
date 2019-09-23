import React from "react";
import Nav from "./components/Nav";
import Svieslente from "./components/Svieslente";
import Administracija from "./components/Administracija";

import Specialistas from "./components/Specialistas";
import Pagrindinis from "./components/Pagrindinis";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.loadFromJsonToState = this.loadFromJsonToState.bind(this);
    this.moveItemToCompleted = this.moveItemToCompleted.bind(this);
    this.addItemToStateAndLocalStorage = this.addItemToStateAndLocalStorage.bind(
      this
    );
    this.removeItemFromStateAndLocalStorage = this.removeItemFromStateAndLocalStorage.bind(
      this
    );
    this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this);
    this.deleteStateFromLocalStorage = this.deleteStateFromLocalStorage.bind(
      this
    );
    this.loadFromLocalStorageToState = this.loadFromLocalStorageToState.bind(
      this
    );
  }

  saveStateToLocalStorage() {
    const currentStateString = JSON.stringify(this.state.data);
    localStorage.setItem("data", currentStateString);
  }
  loadFromJsonToState() {
    let loaded = require("./components/AdminLogic/data.json");
    // console.log(loaded);
    this.setState(
      {
        data: loaded
      },
      () => {
        localStorage.setItem("data", JSON.stringify(this.state.data));
      }
    );
    this.forceUpdate();
  }

  loadFromLocalStorageToState() {
    const data = JSON.parse(localStorage.getItem("data"));
    this.setState({
      data: data
    });
  }

  deleteStateFromLocalStorage() {
    localStorage.removeItem("data");
    localStorage.removeItem("completed");
  }

  removeItemFromStateAndLocalStorage(value) {
    const filtered = this.state.data.filter(ele => ele.uid !== value);
    // console.log(filtered);
    this.setState({ data: filtered }, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data));
    });
  }

  moveItemToCompleted(value) {
    //find the index of object from array that you want to update
    const objIndex = this.state.data.findIndex(obj => obj.uid === value);
    // make new object of updated object.
    const updatedObj = { ...this.state.data[objIndex], aptarnauta: true };
    // make final new array of objects by combining updated object.
    const updatedComplete = [
      ...this.state.data.slice(0, objIndex),
      updatedObj,
      ...this.state.data.slice(objIndex + 1)
    ];
    this.setState({ data: updatedComplete }, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data));
      const completed = [JSON.parse(localStorage.getItem("completed"))];
      completed.push(updatedObj);
      const flatten = list =>
        list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
      let flatComplete = flatten(completed);
      flatComplete[0] === null && flatComplete.shift();
      localStorage.setItem("completed", JSON.stringify(flatComplete));
    });
  }
  addItemToStateAndLocalStorage(value) {
    let uniqid = require("uniqid");
    value["uid"] = uniqid();

    let currentState = this.state.data;
    currentState.push(value);
    this.setState({ data: currentState }, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data));
    });
  }

  render() {
    // console.log("current state");
    // console.log(this.state.data);
    // console.log("current state");
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Pagrindinis
                  stateOfData={this.state.data}
                  loadFromLocalStorageToState={this.loadFromLocalStorageToState}
                />
              )}
            />

            <Route
              path="/components/Administracija"
              render={() => (
                <Administracija
                  stateOfData={this.state.data}
                  loadFromJsonToState={this.loadFromJsonToState}
                  saveStateToLocalStorage={this.saveStateToLocalStorage}
                  loadFromLocalStorageToState={this.loadFromLocalStorageToState}
                  deleteStateFromLocalStorage={this.deleteStateFromLocalStorage}
                  addItemToStateAndLocalStorage={
                    this.addItemToStateAndLocalStorage
                  }
                />
              )}
            />
            <Route
              path="/components/Specialistas"
              render={() => (
                <Specialistas
                  stateOfData={this.state.data}
                  handleChange={this.handleChange}
                  loadFromJsonToState={this.loadFromJsonToState}
                  loadFromLocalStorageToState={this.loadFromLocalStorageToState}
                  moveItemToCompleted={this.moveItemToCompleted}
                  removeItemFromStateAndLocalStorage={
                    this.removeItemFromStateAndLocalStorage
                  }
                />
              )}
            />
            {/* <Route path="/components/Svieslente" component={Svieslente} /> */}
            <Route
              path="/components/Svieslente"
              exact
              render={() => (
                <Svieslente
                  stateOfData={this.state.data}
                  loadFromLocalStorageToState={this.loadFromLocalStorageToState}
                />
              )}
            />
            {/* <Route path="/shop/:id" component={ItemDetail} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

// <Route path="/homepage" render={props =>
//   (<Homepage {...props} pieceOfState={this.state.pieceOfState}/>)
// }/>
