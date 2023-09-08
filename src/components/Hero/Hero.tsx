import {
  Box,
  Paper,
  PaperProps,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FC } from "react";

export interface HeroProps extends PaperProps {}

const Hero: FC<HeroProps> = (props) => {
  return (
    <StyledPaper {...props}>
      <StyledImg src="/profile.jpg" alt="Profile Pic" />
      <Stack>
        <NameBox>
          <Typography variant="h1">William Metcalf</Typography>
          <Typography variant="h2" style={{ opacity: 0.7 }} fontWeight={100}>
            (Bill)
          </Typography>
        </NameBox>
        <Typography variant="h4" color="secondary">
          Technical Lead, Champaign IL
        </Typography>
        <Typography sx={{ marginTop: 1 }} variant="body2">
          Senior full-stack web developer looking for partially-remote work in
          Champaign, IL or fully-remote work elsewhere in the world.
          <br />
          <br />I am a detail oriented developer who is not shy to step outside
          of realm of software development and contribute to improving UX or
          analyzing business needs.
        </Typography>
      </Stack>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.grey[200],
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "flex-start",
  padding: theme.spacing(1),
  "&>:not(:last-child)": {
    marginRight: theme.spacing(1),
  },
}));

const NameBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  "&>:not(:last-child)": { marginRight: "1rem" },
});

const StyledImg = styled("img")(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: 50,
  border: `3px solid ${theme.palette.primary.main}`,
}));

export default Hero;