import React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { DetailPropType } from "./shared/articles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import { detailStyles } from "../styles/details";
import { spaceBetween } from "../styles/shared";

interface DetailsProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  data: DetailPropType;
}

const Details: React.FC<DetailsProps> = ({ isOpen, toggle, data }) => (
  <Modal
    open={isOpen}
    onClose={() => toggle((p) => !p)}
    aria-labelledby={data.title}
    aria-describedby={data.description}
    sx={detailStyles.modal}
    children={
      <Card>
        {data.urlToImage ? (
          <CardMedia component="img" image={data.urlToImage} alt={data.title} />
        ) : (
          <Skeleton variant="rectangular" />
        )}
        <CardContent>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
            fontWeight={"bold"}
          >
            {data.title}
          </Typography>
          <Typography
            id="modal-author"
            sx={detailStyles.padTop}
            textAlign={"center"}
            fontWeight={"bold"}
            fontStyle={"italic"}
          >
            by {data.author ?? data.source?.name ?? "N/A"}
            <Typography
              id="modal-date"
              color="text.secondary"
              component="span"
              fontSize={"0.85rem"}
              ml={1}
            >
              {new Date(data.publishedAt).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          </Typography>
          <Typography id="modal-modal-description" sx={detailStyles.modalDesc}>
            {data?.content ?? data?.description ?? "No Description Provided."}
          </Typography>
        </CardContent>
        <CardActions sx={spaceBetween}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => toggle((p) => !p)}
            sx={detailStyles.backButton}
          >
            Back
          </Button>
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            <LinkIcon sx={detailStyles.linkIcon} />
          </Link>
        </CardActions>
      </Card>
    }
  />
);
export default Details;
