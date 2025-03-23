import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

const ToolBar = styled("div")(({ theme }) => ({
  height: "70px",
}));
const Content = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: "2rem",
}));

export { Root, ToolBar, Content };
