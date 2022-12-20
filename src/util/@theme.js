import { createTheme, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { blue, orange, green, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    customRegular: {
      blue: blue[500],
      green: green[500],
      yellow: yellow[500],
      orange: orange[500],
      white: "#fff",
    },
    customDark: {
      blue: blue[900],
      green: green[900],
      yellow: yellow[900],
      orange: orange[900],
      white: "#fff",
    },
  },
});

export { ThemeProvider, theme, StyledEngineProvider };
