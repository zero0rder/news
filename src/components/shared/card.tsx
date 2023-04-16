import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Skeleton from "@mui/material/Skeleton";
import type { DetailPropType } from "./articles";
import { cardStyles } from "../../styles/card";

interface CardItemProps {
  data: DetailPropType;
  handleClick: (obj: DetailPropType) => void;
}

const CardItem: React.FC<CardItemProps> = ({ data, handleClick }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card raised sx={cardStyles.cardWrap}>
      <CardHeader sx={cardStyles.header} title={data.title} />
      {data.urlToImage ? (
        <CardMedia
          component="img"
          height="175"
          image={data.urlToImage}
          alt={data.title}
          sx={cardStyles.borderRadius}
        />
      ) : (
        <Skeleton
          height={"175px"}
          variant="rectangular"
          sx={cardStyles.borderRadius}
        />
      )}
      <CardContent sx={cardStyles.paddingBottom}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={cardStyles.cardParagraph}
        >
          {data?.content ?? data?.description ?? "No Description Provided"}
        </Typography>
      </CardContent>
      <CardActions sx={cardStyles.justifyMiddle}>
        <Button
          size="small"
          onClick={() =>
            handleClick({
              title: data.title,
              content: data.content,
              description: data.description,
              urlToImage: data.urlToImage,
              author: data.author,
              url: data.url,
              publishedAt: data.publishedAt,
              source: { id: data.source.id, name: data.source.name },
            })
          }
          sx={cardStyles.moreButton}
          endIcon={<ArrowForwardIcon />}
        >
          More
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default CardItem;
