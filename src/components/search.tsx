import React, { useState } from "react";
import Articles from "./shared/articles";
import FilteredArticles from "./shared/filteredArticles";
import DynamicTitle from "./shared/dynamicTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { searchStyles } from "../styles/search";

interface SearchProps {}
const Search: React.FC<SearchProps> = ({}) => {
  const [formState, setFormState] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(() => e.target.value);
  };
  return (
    <Box>
      <DynamicTitle>Search Top News From COUNTRY_CODE by term:</DynamicTitle>
      <TextField
        value={formState}
        placeholder="search..."
        onChange={handleOnChange}
        autoComplete="off"
        InputProps={{
          type: "search",
        }}
        sx={searchStyles.textField}
      />
      {formState ? <FilteredArticles term={formState} /> : <Articles />}
    </Box>
  );
};

export default Search;
