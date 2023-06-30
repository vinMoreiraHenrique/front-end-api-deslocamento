import { inter } from "@/app/layout";
import { createTheme } from "@mui/material";

export const inputTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2D2E2E",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "1.3rem",
      textAlign: "center",
      fontWeight: "500",
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-filled": {
            color: "white",
            "&.Mui-focused": {
              color: "grey",
            }
          },
        },
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#2D2E2E",
          "&.Mui-focused": {
            backgroundColor: "#b1b1b1",
          },
          ":hover": {
            backgroundColor: "#b1b1b1",
          },
          "& .MuiInputLabel-filled": {
            color: "white",
            "&.Mui-focused": {
            }
          },
          "&.MuiFilledInput-root::after": {
            borderColor: "#090909",
          },
          "&:hover.MuiFilledInput-root::before": {
            borderColor: "#2D2E2E ",
            color: "red",
          },
          "&.Mui-focused::after": {
            borderColor: "blue",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "green",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red ",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue",
          },
        },
      },
    },
  },
});
