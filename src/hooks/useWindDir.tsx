import {
  BsArrowDownRight,
  BsArrowDownLeft,
  BsArrowDown,
  BsArrowUp,
  BsArrowUpRight,
  BsArrowUpLeft,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";

function useWindDir(degrees: number): JSX.Element {
  if (degrees < 22.5 || degrees > 360 - 22.5) {
    return <BsArrowRight />;
  }
  if (degrees < 180 + 22.5 && degrees > 180 - 22.5) {
    return <BsArrowLeft />;
  }
  if (degrees < 90 + 22.5 && degrees > 90 - 22.5) {
    return <BsArrowUp />;
  }
  if (degrees < 270 + 22.5 && degrees > 270 - 22.5) {
    return <BsArrowDown />;
  }
  if (degrees < 225 + 22.5 && degrees > 225 - 22.5) {
    return <BsArrowDownLeft />;
  }
  if (degrees < 315 + 22.5 && degrees > 315 - 22.5) {
    return <BsArrowDownRight />;
  }
  if (degrees < 135 + 22.5 && degrees > 135 - 22.5) {
    return <BsArrowUpLeft />;
  }
  if (degrees < 45 + 22.5 && degrees > 45 - 22.5) {
    return <BsArrowUpRight />;
  }

  return <></>;
}

export default useWindDir;
