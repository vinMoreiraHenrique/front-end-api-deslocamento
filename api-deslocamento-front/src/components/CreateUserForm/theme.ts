import { createTheme } from "@mui/material";

export const inputTheme = createTheme({
  
    components: {
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&.MuiFilledInput-root::after": {
              borderColor: "green",
            },
            "&:hover.MuiFilledInput-root::before": {
              borderColor: "red ",
              color: "red",
            },
            "&.Mui-focused::after": {
              borderColor: "yellow",
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
  