import { useState } from "react";
import Header from "./components/navigation/header";
import { Outlet } from "react-router";
import Container from "@mui/material/Container";
import { CountryContext } from "./contexts";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { appStyles } from "./styles/app";

function App() {
  const [country, setCountry] = useState<string>("us");
  return (
    <ThemeProvider theme={theme}>
      <CountryContext.Provider value={{ country, setCountry }}>
        <Container maxWidth="lg" sx={appStyles}>
          <Header />
          <Outlet />
        </Container>
      </CountryContext.Provider>
    </ThemeProvider>
  );
}

export default App;
