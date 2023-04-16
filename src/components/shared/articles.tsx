import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { CountryContext } from "../../contexts";
import Cards from "./cards";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { progessStyles, containerSpacing } from "../../styles/shared";

interface ArticlesProps {}
export type DetailPropType = {
  title: string;
  content: string;
  description: string;
  urlToImage: string;
  author: string;
  url: string;
  publishedAt: string | number | Date;
  source: { id: string | null; name: string | null };
};

const Articles: React.FC<ArticlesProps> = ({}) => {
  const { country } = useContext(CountryContext);
  const {
    data: headlines,
    // isError,
    isLoading,
  } = useQuery<{ articles: DetailPropType[] }, Error>(
    ["headlines", country],
    () =>
      fetch(
        `${import.meta.env.VITE_API_BASE_URL}?country=${country}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json())
  );

  if (isLoading) return <LinearProgress sx={progessStyles} />;

  return (
    <Grid container spacing={containerSpacing}>
      <Cards articles={headlines?.articles} />
    </Grid>
  );
};

export default Articles;

// function cleanStr(str: string): string {
//   if (str === null) return '';
//   return str.replace(/(<([^>]+)>)/gi, "");
// }
