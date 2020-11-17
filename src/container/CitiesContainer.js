import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getCity, getUpdateCity, onDeleteCard } from "../redux/city-reducer";
import { CardContainer } from "./CardContainer";
import SearchInput from "../components/SearchInput/SearchInput";
import stl from "../components/Card/Card.module.css";

const CitiesContainer = (props) => {
  const { city, onDeleteCard, isUpdate } = props;

    window.onload = () => {
      let id = props.city.map((id) => id.id);
      id.forEach((id) => props.getUpdateCity(id));
    };
  const addCity = (values) => {
    const { searchCityInput } = values;

    if (!searchCityInput) {
      return false;
    } else {
      props.getCity(searchCityInput);
    }
    values.searchCityInput = "";
  };

  const onUpdateCard = (id) => {
    localStorage.clear("reduxState");
    props.getUpdateCity(id);
  };

  return (
    <div>
      <div>
        <h2>Geting city for name</h2>
      </div>
      <SearchInput onSubmit={addCity} />

      <div className="grid">
        {isUpdate ? (
          <CircularProgress color="secondary" className={stl.preloader} />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-end"
              >
                {city.map((city) => (
                  <Grid key={city.id} item>
                    <CardContainer
                      city={city}
                      onDeleteCard={onDeleteCard}
                      onUpdateCard={onUpdateCard}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: state.cityPage.city,
  isUpdate: state.cityPage.isUpdate,
});

const mapDispatchToProps = {
  getCity,
  getUpdateCity,
  onDeleteCard,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CitiesContainer);
