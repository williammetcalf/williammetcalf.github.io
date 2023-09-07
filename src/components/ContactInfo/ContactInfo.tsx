import { Email, GitHub, PhoneIphone } from "@mui/icons-material";
import {
  Box,
  Paper,
  PaperProps,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { FC } from "react";

export interface ContactInfoProps extends PaperProps {}

const ContactInfo: FC<ContactInfoProps> = (props) => {
  const { palette } = useTheme();
  const { contrastText } = palette.primary;

  return (
    <StyledPaper sx={{ padding: 1 }} {...props}>
      <RowBox display="flex">
        <Email color="secondary" />
        <Typography color={contrastText} variant="body2">
          williamdmetcalf@gmail.com
        </Typography>
      </RowBox>
      <RowBox display="flex">
        <PhoneIphone color="secondary" />
        <Typography color={contrastText} variant="body2">
          1 (217) 778-0263
        </Typography>
      </RowBox>
      <RowBox display="flex">
        <GitHub color="secondary" />
        <Typography color={contrastText} variant="body2">
          github.com/williammetcalf
        </Typography>
      </RowBox>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

const RowBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "0.25em",
});

export default ContactInfo;
