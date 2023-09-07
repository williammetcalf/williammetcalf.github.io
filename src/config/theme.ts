import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: { main: "#333" },
    secondary: { main: "#7e9ea8" },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: "normal",
    },
    h2: { fontSize: 30, fontWeight: "normal" },
    h3: { fontSize: 22, fontWeight: "bold" },
    h4: { fontSize: 22, fontWeight: "normal" },
    h5: { fontSize: 18, fontWeight: "bold" },
    h6: { fontSize: 18, fontWeight: "normal" },
    body1: { fontSize: 16 },
    body2: { fontSize: 14 },
  },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        ul: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
