import React, { createContext } from "react";

export const CountryContext = createContext<{
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}>({ country: "us", setCountry: () => "" });
