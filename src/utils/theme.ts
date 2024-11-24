"use client";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  }
});

export default theme;