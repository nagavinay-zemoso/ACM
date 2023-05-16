import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d4cd7",
      dark: "#000",
      light: "rgba(77, 124, 254, 0.12)",
    },
    secondary: {
      main: "#949494",
      light: "#fff",
      contrastText: "#98a9bc",
      dark: "#666666",
    },
    action: {
      hover: "#f6f6f6",
    },
    text: {
      primary: "#000000",
      secondary: "#949494",
    },
    grey: {
      100: "#1c1c21",
    },
  },
  spacing: 4,
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "32px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.31,
      letterSpacing: "0.1px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.3,
      letterSpacing: "0.2px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.33,
      letterSpacing: "0.2px",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "0.1px",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.29,
      letterSpacing: "0.1px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "0.1px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.33,
      letterSpacing: "0.2px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 600,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.29,
      letterSpacing: "0.2px",
    },
    subtitle2: {
      fontSize: "10px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.6,
      letterSpacing: "0.2px",
    },
  },
});

export default theme;
