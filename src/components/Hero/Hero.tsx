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
      <Box display="flex" flexWrap="nowrap" alignItems="center">
        <StyledImg
          src="/profile.jpg"
          alt="Profile Pic"
          sx={{ marginRight: 1 }}
        />
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
          </Typography>
        </Stack>
      </Box>
      <Typography
        sx={(theme) => ({
          marginTop: 1,
          padding: 1,
          textAlign: "center",
          backgroundColor: theme.palette.grey[200],
          borderRadius: theme.shape.borderRadius,
        })}
        variant="caption"
      >
        <i>
          I am a detail-oriented developer who is not shy to step outside of the
          realm of software development to engage with users to better
          understand their needs and deliver a high-quality user experience. I
          take pride in my ability to write clean and maintainable code.
        </i>
      </Typography>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.grey[300],
  border: `${theme.spacing(0.5)} solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(0.5),
  display: "flex",
  flexDirection: "column",
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
