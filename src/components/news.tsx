import React from "react";
import Articles from "./shared/articles";
import DynamicTitle from "./shared/dynamicTitle";
import Box from "@mui/material/Box";

interface NewsProps {}

const News: React.FC<NewsProps> = ({}) => (
  <Box>
    <DynamicTitle>Top News From COUNTRY_CODE:</DynamicTitle>
    <Articles />
  </Box>
);

export default News;
