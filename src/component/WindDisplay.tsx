import useWindDir from "hooks/useWindDir";
import React from "react";
import { WindDataType } from "types";

type WindProps = {
  wind: WindDataType;
};

const WindDisplay = ({ wind }: WindProps) => {
  // TODO: This component is to be used anywhere where we need wind values
  return (
    <div className="wind flex">
      <p>Wind:</p>
      <i>{useWindDir(wind?.deg)}</i>
      <p>{wind?.speed} m/s</p>
    </div>
  );
};

export default WindDisplay;
