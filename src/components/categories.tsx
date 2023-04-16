import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { categoryStyles } from "../styles/categories";
import { containerSpacing } from "../styles/shared";
import { categoryData } from "../utils/mock";
interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({}) => (
  <Box sx={categoryStyles.boxContainer}>
    <Grid container spacing={containerSpacing} sx={categoryStyles.outerGrid}>
      {categoryData.map((c, i) => (
        <Grid item key={i} xs={12} sm={6} md={4}>
          <Button variant="contained" sx={categoryStyles.gridButton}>
            {c}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Categories;
