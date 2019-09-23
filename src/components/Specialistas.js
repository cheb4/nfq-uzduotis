import React from "react";
import Select from "react-select";

class Specialistas extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadFromLocalStorageToState();
    this.state = {
      selectedOption: ""
    };
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  // return { value: ele.specialist, label: ele.specialist };
  render() {
    // tikrinti ar yra duomenys
    let stateOfData =
      this.props.stateOfData === null ? [] : this.props.stateOfData;
    let options = stateOfData.map(ele => ele.specialist);

    let uniqueItems = [...new Set(options)].map(ele => {
      return { value: ele, label: ele };
    });

    const { selectedOption } = this.state;

    const selectedListFilter = stateOfData.filter(
      ele => ele.specialist === selectedOption.value && ele.aptarnauta !== true
    );

    const selectedList = selectedListFilter.map(ele => (
      <div key={ele.uid}>
        <h2>{ele.uid}</h2>
        <p>{ele.first_name}</p>
        <p>{ele.specialist}</p>
      </div>
    ));

    // Boolean(Array.isArray(array) && array.length)
    const firstOneOntheList = selectedList[0];
    const btnAptarnauti = (
      <div>
        <button
          onClick={() =>
            this.props.removeItemFromStateAndLocalStorage(
              selectedListFilter[0].uid
            )
          }
        >
          Aptarnautas(istrinti)
        </button>
        <button
          onClick={() =>
            this.props.moveItemToCompleted(selectedListFilter[0].uid)
          }
        >
          Aptarnautas(pazymeti kad aptarnautas)
        </button>
      </div>
    );

    return (
      <div className="App">
        <h1>Specialistas Page</h1>
        <button onClick={this.props.loadFromJsonToState}>
          load from json to state
        </button>
        <div className="spec">
          <Select
            menuPlacement="auto"
            menuPosition="fixed"
            value={selectedOption}
            onChange={this.handleChange}
            options={uniqueItems}
          />

          {selectedListFilter[0] === undefined ? (
            <h1>pasirinkti specialista</h1>
          ) : (
            btnAptarnauti
          )}

          <div>
            <h1>Aptarnaujamas klientas</h1>
            {firstOneOntheList}
          </div>

          <div className="specList">{selectedList}</div>
        </div>
        {/* <p>{newUid}</p> */}
      </div>
    );
  }
}

export default Specialistas;
