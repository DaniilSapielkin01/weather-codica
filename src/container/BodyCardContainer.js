import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import { BodyCard } from "../components/BodyCard/BodyCard";

const BodyCardContainer = React.memo((props) => {
  const [cityCard, setCityCard] = useState();

  useEffect(() => {
    const cardId = Number(props.match.params.id);
    let card = props.city.find((c) => c.id === cardId);
    setCityCard({ card });
  }, [props]);

  return (
    <>
      {cityCard === undefined ? (
        <CircularProgress color="secondary" />
      ) : (
        <BodyCard {...cityCard.card} />
      )}
    </>
  );
});
const mapStateToProps = (state) => ({
  city: state.cityPage.city,
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(BodyCardContainer);
