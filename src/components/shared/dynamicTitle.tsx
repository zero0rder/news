import React, { useContext } from "react";
import { CountryContext } from "../../contexts";
import Typography from "@mui/material/Typography";
import { dynamicTitle } from "../../styles/shared";

interface DynamicTitleProps {
  children: string;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ children }) => {
  const { country } = useContext(CountryContext);
  return (
    <Typography variant="h4" sx={dynamicTitle}>
      {children.replace("COUNTRY_CODE", getCountryName(country))}
    </Typography>
  );
};

function getCountryName(code: string): string {
  switch (code) {
    case "us":
      return "the United States";
    case "in":
      return "India";
    default:
      return "the United States";
  }
}

export default DynamicTitle;
