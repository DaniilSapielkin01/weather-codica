import React from "react";

import { Card } from "../components/Card/Card";

export const CardContainer = (props) => {
  const { onDeleteCard, onUpdateCard, id, getImageIcon } = props;
  const handleClick = (type, id) => {
    if (type === "delete") {
      onDeleteCard(id);
    } else if (type === "update") {
      onUpdateCard(id);
    }
  };
  return (
    <>
        <Card
          key={id}
          {...props}
          handleClick={handleClick}
          getImage={getImageIcon}
        />
      
    </>
  );
};
