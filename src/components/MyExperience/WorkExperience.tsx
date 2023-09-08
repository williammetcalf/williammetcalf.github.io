import React, { FC } from "react";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import { Work } from "@mui/icons-material";
import { Box, Skeleton, Stack } from "@mui/material";
import WorkProjectItem from "./WorkProjectItem";

const WorkExperience: FC = () => {
  return (
    <ExperienceSection
      title="Work Experience"
      TitleIconComponent={Work}
      subsections={[
        {
          name: "DMI — Digital Management, Inc",
          dateRange: "2018 - present",
          description: "Technical Lead",
          content: (
            <Stack spacing={1}>
              <WorkProjectItem
                name="Design Studio"
                description="Design Studio — a web app created for Eli Lilly's clinical trial designers — empowers them to optimize upcoming clinical trials for low cost, high enrollment rate, and minimal patient burden. I developed complex tables containing interrelated data, as well as lead a large code-cleanup effort for an old and poorly-written codebase."
                tags={["React", "Node", "Postgres", "AWS"]}
              />
              <WorkProjectItem
                name={
                  <Box display="flex">
                    <Skeleton
                      className="no-print-only"
                      width={75}
                      sx={{ marginRight: 1 }}
                      title="<Redacted>"
                    />
                    Clinical Trial Portal
                  </Box>
                }
                description="CTP — utilized by both patients and clinicians — facilitated the clinical trial of Lilly's <redacted name> drug. It integrated with patients' wearable medical devices to deliver near-real-time data for monitoring the drug's efficacy."
                tags={["React", "Node", "GraphQL", "AWS"]}
              />
              <WorkProjectItem
                name="Polaris"
                description="Polaris is a specialized tool utilized by Eli Lilly executives to oversee ongoing drug development and clinical trials. I designed and developed complex bespoke visualiztions which allow users to better understand ongoing projects."
                tags={["React", "Node", "GraphQL", "Heroku"]}
              />
              <WorkProjectItem
                name="Clinical Design Operating System"
                description="CDOS is a search engine used by employees across all divisions within Eli Lilly. I developed a data pipeline that ingested documents from multiple sources, aggregating the data within an Elastic Search database. The documents were then made searchable to users through the CDOS webapp."
                tags={["React", "Node", "Elastic Search", "Heroku"]}
              />
            </Stack>
          ),
        },
        {
          name: "NextGear Capital",
          dateRange: "Summer 2017",
          description: "Software Developer",
          content: (
            <Stack>
              <WorkProjectItem
                name="Dealership Floor Planning"
                description="NextGear capital is a automotive company that specializes in dealership floorplanning. I was part of an agile team working on their internal collections software, where I worked closely with the users and UX designers to implement an effective system for monitoring the payment status of their customers."
                bulletPoints={[]}
                tags={["AngularJS", "SQL", "Java Spring"]}
              />
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default WorkExperience;
