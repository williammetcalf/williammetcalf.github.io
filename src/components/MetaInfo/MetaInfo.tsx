import {
  Groups3Outlined,
  InterestsOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";
import { Paper, PaperProps, Stack, styled } from "@mui/material";
import { FC } from "react";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import ChipGroup from "./ChipGroup";
import RatingGroup from "./RatingGroup";
import { RatingItemProps } from "./RatingItem";

export interface MetaInfoProps extends PaperProps {}

const skills: RatingItemProps[] = [
  { label: "Clean Code", rating: 5 },
  { label: "React JS", rating: 5 },
  { label: "Node JS", rating: 5 },
  { label: "SQL / Postgres", rating: 4 },
  { label: "Angular", rating: 3.5 },
  { label: "Various NoSQL DBs", rating: 3 },
  { label: "AWS", rating: 3 },
];

const interests: string[] = [
  "Gardening",
  "Fishing",
  "Home Improvement",
  "Hiking",
  "Biking",
  "Video Games",
];

const softSkills: string[] = [
  "Explaining",
  "Tutoring",
  "Critical Thinking",
  "Code Review",
  "Requirements Gathering",
];

const MetaInfo: FC<MetaInfoProps> = (props) => {
  return (
    <StyledPaper {...props}>
      <Stack spacing={4} style={{ height: "100%" }}>
        <ExperienceSection
          title="Skills"
          TitleIconComponent={LightbulbOutlined}
          subsections={[{ content: <RatingGroup items={skills} /> }]}
        />
        <ExperienceSection
          title="Soft Skills"
          TitleIconComponent={Groups3Outlined}
          subsections={[{ content: <ChipGroup items={softSkills} /> }]}
        />
        <ExperienceSection
          title="Interests"
          TitleIconComponent={InterestsOutlined}
          subsections={[{ content: <ChipGroup items={interests} /> }]}
        />
      </Stack>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  border: `${theme.spacing(0.5)} solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(0.5),
}));

export default MetaInfo;
