import { createTheme } from "@mui/material";

export const styledTable = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: "white",
          ":nth-of-type(even)": {
            backgroundColor: "pink",
        }
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
            backgroundColor: "blue",
            ":nth-of-type(even)": {
                backgroundColor: "pink",
            }
          },
      },
    },
  },
});
