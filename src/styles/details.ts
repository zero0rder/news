// Details.tsx
export const detailStyles = {
    modal: {
        "&.MuiModal-root": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .MuiCard-root": {
          backgroundColor: "#fff",
          color: "#000",
          width: "100%",
          maxWidth: "36rem",
          margin: "0 1.25rem",
          borderRadius: "1rem",
        },
        "& .MuiCardMedia-root, .MuiSkeleton-root": {
          borderRadius: 0,
          height: "17rem",
        },
    },
    linkIcon: {
        padding: "0.25rem",
        cursor: "pointer",
        ":hover": {
          color: "#ff5722",
        },
    },
    backButton: {
        fontWeight: "bold",
        ":hover": {
          color: "#ff5722",
        },
    },
    padTop: { paddingTop: "0.75rem" },
    modalDesc: { mt: 2 },
}