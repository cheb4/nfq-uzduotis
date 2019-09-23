import React from "react";
import { Link } from "react-router-dom";

class Pagrindinis extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isThereData: localStorage.getItem("data") ? true : false
    };
  }
  render() {
    console.log(this.state.isThereData);

    const btnGotoadmin = (
      <Link to="/components/Administracija">
        <button>ikelti duomenis</button>
      </Link>
    );

    const successfullyLoadedLocalStorage = (
      <div className="pagrLinkContainer">
        <Link className="pagrLink" to="/components/Svieslente">
          <h2>Svieslente</h2>
        </Link>
        <Link className="pagrLink" to="/components/Administracija">
          <h2>Administracija</h2>
        </Link>
        <Link className="pagrLink" to="/components/Specialistas">
          <h2>Specialistas</h2>
        </Link>
      </div>
    );
    const buttonToLoad = (
      <button onClick={this.props.loadFromLocalStorageToState}>
        load from localStorage to state
      </button>
    );
    return (
      <div className="App">
        {this.props.stateOfData && this.props.stateOfData.length
          ? buttonToLoad
          : " "}
        {this.state.isThereData ? successfullyLoadedLocalStorage : btnGotoadmin}
      </div>
    );
  }
}

export default Pagrindinis;
