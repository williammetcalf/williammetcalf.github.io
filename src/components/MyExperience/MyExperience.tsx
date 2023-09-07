import { Stack, StackProps } from "@mui/material";
import { FC } from "react";
import EducationExperience from "./EducationExperience";
import WorkExperience from "./WorkExperience";

export interface MyExperienceProps extends StackProps {}

const MyExperience: FC<StackProps> = (props) => {
  return (
    <Stack spacing={2} {...props}>
      <WorkExperience />
      <EducationExperience />
    </Stack>
  );
};

export default MyExperience;
