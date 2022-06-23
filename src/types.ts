import { Dispatch, SetStateAction } from "react";

export type ContextDataType = {
  search: string;
  setSearch?: Dispatch<SetStateAction<string>>;
};
