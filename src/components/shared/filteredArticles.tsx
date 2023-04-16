import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { CountryContext } from "../../contexts";
import Grid from "@mui/material/Grid";
import Cards from "./cards";
import LinearProgress from "@mui/material/LinearProgress";
import { containerSpacing, progessStyles } from "../../styles/shared";

interface FilteredArticlesProps {
  term: string;
}

const FilteredArticles: React.FC<FilteredArticlesProps> = ({ term }) => {
  const { country } = useContext(CountryContext);
  const {
    data: filteredHeadlines,
    // isError,
    isLoading,
  } = useQuery(["filteredArticles", term], () =>
    fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }?country=${country}&q=${term}&apiKey=${import.meta.env.VITE_API_KEY}`
    ).then((res) => res.json())
  );

  if (isLoading || filteredHeadlines?.status == "error")
    return <LinearProgress sx={progessStyles} />;

  return (
    <Grid container spacing={containerSpacing}>
      <Cards articles={filteredHeadlines.articles} />
    </Grid>
  );
};

export default FilteredArticles;
