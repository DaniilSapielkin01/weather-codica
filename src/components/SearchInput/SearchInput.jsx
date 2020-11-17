import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import stl from "./SearchInput.module.css";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    className={stl.input}
    size="small"
    id="outlined-basic"
    label="Enter city"
    variant="outlined"
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

let SearchInput = ({ handleSubmit }) => {
  return (
    <form className={stl.form} onSubmit={handleSubmit}>
      <Field
        placeholder="Enter city"
        component={renderTextField}
        name="searchCityInput"
        type="text"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Primary
      </Button>
    </form>
  );
};

SearchInput = reduxForm({
  form: "newCityForm",
})(SearchInput);

export default SearchInput;
