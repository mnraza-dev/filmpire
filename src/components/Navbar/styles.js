import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ToolBar = styled(Toolbar)(({ theme }) => ({
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "240px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

export { ToolBar };
