import React from "react";
import { Link } from "react-router-dom";

class Svieslente extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadFromLocalStorageToState();
  }

  render() {
    let stateOfData =
      this.props.stateOfData === null ? [] : this.props.stateOfData;

    const namesToDisplay = stateOfData.filter(ele => ele.aptarnauta !== true);

    let options = namesToDisplay.map(ele => ele.specialist);
    let uniqueItems = [...new Set(options)].map(ele => ele);
    const uniqueItemsObjectArray = uniqueItems.map(ele => ({ [ele]: [] }));

    let itemArrayBySpecialist = [];
    // neefektyvus algoritmas !
    // [{spec1:[{1},{2},{3}]},{spec2:[{1},{2},{3}]}]

    for (const specialistObject of uniqueItemsObjectArray) {
      let specialistString = Object.keys(specialistObject)[0];
      let arrayOfItemsByspecialist = namesToDisplay.filter(
        ele => ele.specialist === specialistString
      );
      specialistObject[[specialistString]] = arrayOfItemsByspecialist;
      itemArrayBySpecialist.push(specialistObject);
    }

    console.log(itemArrayBySpecialist);
    console.log("namesToDisplay");
    let uniqid = require("uniqid");

    const itemArrayBySpecialistFormated = itemArrayBySpecialist.map(ele => (
      <div key={uniqid()}>
        <h1>{Object.keys(ele)[0]}</h1>
        {ele[Object.keys(ele)[0]].map(item => (
          <div key={item.uid} className="boxes">
            <h2>{item.first_name}</h2>
            <p>{item.last_name}</p>
            <p>{item.uid}</p>
          </div>
        ))}
      </div>
    ));
    return (
      <div className="App">
        <h1>Svieslente</h1>
        {/* {itemArrayBySpecialistFormated} */}
        <div className="gridContainer">{itemArrayBySpecialistFormated}</div>
      </div>
    );
  }
}

export default Svieslente;
