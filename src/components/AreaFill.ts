import { Paper, styled } from "@mui/material";

const AreaFill = styled(Paper)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
}));

export default AreaFill;
