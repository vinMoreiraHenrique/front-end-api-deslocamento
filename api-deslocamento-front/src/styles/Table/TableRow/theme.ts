import { inter } from "@/app/layout";
import { createTheme } from "@mui/material";

export const styledTable = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#090909",
          borderBottom: "0.5px solid transparent",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          ":hover": {
            transition: "all 0.3s ease",
            backgroundColor: "#090909",
          },
          color: "#0505",
          ":nth-of-type(even)": {
            backgroundColor: "#090909",
          },
          ":nth-of-type(odd)": {
            backgroundColor: "#2D2E2E",
          },
          borderCollapse: "collapse",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          color: "white",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: "white",
        },
        selectIcon: {
          color: "white",
        },
        actions: {
          color: "blue",
          backgroundColor: "orange",
        },
        selectLabel: {
          color: "white",
        },
      },
    },
  },
});
