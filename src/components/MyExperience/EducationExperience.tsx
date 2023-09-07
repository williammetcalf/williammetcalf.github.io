import { School } from "@mui/icons-material";
import { FC } from "react";
import ExperienceSection from "../ExperienceSection/ExperienceSection";

export interface EducationExperienceProps {}

const EducationExperience: FC<EducationExperienceProps> = () => {
  return (
    <ExperienceSection
      title="Education"
      TitleIconComponent={School}
      subsections={[
        {
          name: "Rose-Hulman Institute of Technology",
          description: (
            <>
              B.S. in Computer Science,{" "}
              <i style={{ fontSize: "90%" }}>Magma cum Laude</i>
              <br />
              <span style={{ fontSize: "80%" }}>
                Minors in Mathematics, Psychology
              </span>
            </>
          ),
          dateRange: "2014 - 2018",
        },
      ]}
    />
  );
};

export default EducationExperience;
