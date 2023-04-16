// Categories.tsx
export const categoryStyles = {
    boxContainer: { height: "calc(100vh - 7rem)", display: "flex" },
    outerGrid: {
        "&.MuiGrid-root": { margin: 0, width: "auto", alignSelf: "center" },
    },
    gridButton: {
        width: "100%",
        padding: "1.25rem 2rem",
        fontSize: "1rem",
        fontWeight: "bold",
        ":hover": {
            backgroundColor: "#ff5722",
        },
    }
}