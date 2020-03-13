import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(23, 23, 23, 1)",
      white: "rgba(250, 250, 250, 1)"
    },
    background: {
      paper: "rgba(250, 250, 250, 1)",
      default: "rgba(250, 250, 250, 1)"
    },
    primary: {
      light: "rgba(253, 162, 22, 1)",
      main: "rgba(2, 176, 176, 1)",
      dark: "rgba(0, 128, 129, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(255, 141, 138, 1)",
      main: "rgba(248, 90, 93, 1)",
      dark: "rgba(41, 76, 81, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(23, 23, 23, 1)",
      secondary: "rgba(253, 162, 22, 1)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});
export default theme;
