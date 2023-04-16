// Card.tsx
export const cardStyles = {
    cardWrap: {
        padding: "1.25rem",
        borderRadius: "0.5rem",
    },
    header: {
        height: "2rem",
        p: 0,
        mb: 2,
        "& .MuiTypography-root": {
          fontSize: "1rem",
          fontWeight: "bold",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        },
      },
      borderRadius: { borderRadius: "4px" },
      paddingBottom: { paddingBottom: "0.25rem" },
      justifyMiddle: { justifyContent: "center" },
      cardParagraph: {
        "&.MuiTypography-root": {
          height: "81px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: "4",
          WebkitBoxOrient: "vertical",
        },
      },
      moreButton: {
        fontWeight: "bold",
        ":hover": {
          color: "#ff5722",
        },
    }
}

