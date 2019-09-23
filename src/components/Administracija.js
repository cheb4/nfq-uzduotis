import React from "react";
import { Link } from "react-router-dom";
// import ValidationSchema from "./AdminLogic/AdminLogic";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

class Administracija extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocalStorageEmpty: localStorage.getItem("data")
    };
  }

  // let isArrayWithLength = Boolean(Array.isArray(array) && array.length)
  render() {
    let stateOfData =
      this.props.stateOfData === null ? [] : this.props.stateOfData;

    const Names = stateOfData.map(ele => (
      <div key={ele.uid} className="adminBoxes">
        <h1>{ele.first_name}</h1>
        <p>specialist: {ele.specialist}</p>
        <p>id: {ele.uid}</p>
      </div>
    ));

    // formik

    const SignupSchema = Yup.object().shape({
      first_name: Yup.string()
        .min(2, "Per mažai raidžių!")
        .max(50, "Per daug raidžių!")
        .required("Privalomas laukas"),
      last_name: Yup.string()
        .min(2, "Per mažai raidžių!")
        .max(50, "Per daug raidžių!")
        .required("Privalomas laukas"),
      email: Yup.string()
        .email("neteisingas el paštas")
        .required("Privalomas laukas"),
      specialist: Yup.string()
        .min(2, "Per mažai raidžių!")
        .max(50, "Per daug raidžių!")
        .required("Privalomas laukas")
    });

    const ValidationSchema = () => (
      <div>
        <h1>Sign up</h1>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            specialist: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values

            this.props.addItemToStateAndLocalStorage(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>vardas</div>
              <Field name="first_name" />
              {errors.first_name && touched.first_name ? (
                <div className="error">{errors.first_name}</div>
              ) : null}
              <div>pavarde</div>
              <Field name="last_name" />
              {errors.last_name && touched.last_name ? (
                <div className="error">{errors.last_name}</div>
              ) : null}
              <div>el paštas</div>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <div>norimas specialistas</div>
              <Field name="specialist" />
              {errors.specialist && touched.specialist ? (
                <div className="error">{errors.specialist}</div>
              ) : null}
              <div></div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );

    // end formik
    return (
      <div className="AdminPage">
        <h1>admin page</h1>
        <div className="AdminPageContainer">
          <div>
            <button onClick={this.props.loadFromJsonToState}>
              load from json to state
            </button>
            {this.state.isLocalStorageEmpty ? (
              <button onClick={this.props.loadFromLocalStorageToState}>
                load from localStorage to state
              </button>
            ) : (
              ""
            )}
            {Boolean(stateOfData.length) ? (
              <button onClick={this.props.saveStateToLocalStorage}>
                save state to localStorage
              </button>
            ) : (
              ""
            )}
            <button onClick={this.props.deleteStateFromLocalStorage}>
              delete state from localStorage
            </button>
            <ValidationSchema />
          </div>
          <div>{Names}</div>
        </div>
      </div>
    );
  }
}

export default Administracija;
