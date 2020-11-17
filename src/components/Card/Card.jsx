import React from "react";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

import { CardInfo } from "../Card/CardInfo/CardInfo";
import stl from "./Card.module.css";

export const Card = ({ handleClick, city, getImage }) => {
  return (
    <div className={stl.card}>
      <IconButton
        className={stl.btnDelete}
        aria-label="delete"
        onClick={() => handleClick("delete", city.id)}
      >
        <DeleteIcon />
      </IconButton>
      <NavLink to={`/bodycard/${city.id}`}>
        <div className={stl.cardItem}>
          <CardInfo city={city} getImage={getImage} />
        </div>
      </NavLink>
      <Button
        className={stl.btnUpdate}
        variant="outlined"
        size="small"
        color="secondary"
        onClick={() => handleClick("update", city.id)}
      >
        Update
      </Button>
    </div>
  );
};
