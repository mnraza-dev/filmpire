import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

const StyledMain = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: "2em",
}));

const ToolBar = styled("div")(({ theme }) => ({
  height: "70px",
}));
const Content = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "2rem",
}));

export { StyledDiv, StyledMain, ToolBar, Content };
