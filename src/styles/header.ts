// Header.tsx
export const headerStyles = {
    toolbar: {
        justifyContent: "space-between",
    },
    buttonGroupWeb: { display: { xs: "none", md: "flex" } },
    buttonGroupMobile: { display: { xs: "flex", md: "none" } },
    buttonHover: {
        ":hover": {
          backgroundColor: "#ff5722",
        },
    },
}