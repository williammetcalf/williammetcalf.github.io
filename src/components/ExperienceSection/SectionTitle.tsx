import { Box, Typography, styled } from "@mui/material";
import { ComponentType, FC } from "react";

export interface SectionTitleProps {
  title: string;
  IconComponent: ComponentType<{}>;
}

const SectionTitle: FC<SectionTitleProps> = (props) => {
  const { title, IconComponent } = props;

  return (
    <StyledTypography color="primary">
      <IconBox>
        <IconComponent />
      </IconBox>
      <span>{title}</span>
    </StyledTypography>
  );
};

const StyledTypography = styled(Typography)({
  display: "flex",
  alignItems: "center",
  "&>:not(:last-child)": {
    marginRight: "0.5em",
  },
});
StyledTypography.defaultProps = { variant: "h2" };

const IconBox = styled(Box)({
  width: "1.25em",
  height: "1.25em",
  borderRadius: "1.25em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid currentColor",
});

export default SectionTitle;
