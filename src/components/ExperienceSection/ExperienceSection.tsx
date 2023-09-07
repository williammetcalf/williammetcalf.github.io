import { Box, Stack, Typography } from "@mui/material";
import { ComponentType, FC, ReactNode } from "react";
import SectionTitle from "./SectionTitle";

export interface ExperienceSectionProps {
  title: string;
  TitleIconComponent: ComponentType<{}>;
  subsections: {
    name?: string;
    description?: ReactNode;
    dateRange?: string;
    content?: ReactNode;
  }[];
}

const ExperienceSection: FC<ExperienceSectionProps> = (props) => {
  const { title, TitleIconComponent, subsections } = props;

  return (
    <Stack spacing={1}>
      <SectionTitle title={title} IconComponent={TitleIconComponent} />
      {subsections.map((subsection, idx) => (
        <Stack key={idx}>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            {subsection.name && (
              <Typography variant="h5">{subsection.name}</Typography>
            )}
            {subsection.dateRange && (
              <Typography
                variant="subtitle2"
                color="secondary"
                style={{ opacity: 0.8 }}
              >
                {subsection.dateRange}
              </Typography>
            )}
          </Box>
          {subsection.description && (
            <Typography
              variant="subtitle1"
              color="secondary"
              style={{ lineHeight: "1em" }}
            >
              {subsection.description}
            </Typography>
          )}
          {subsection.content && (
            <Box sx={{ marginTop: 1, paddingLeft: 1 }}>
              {subsection.content}
            </Box>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default ExperienceSection;
