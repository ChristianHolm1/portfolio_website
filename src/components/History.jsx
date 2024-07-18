/* eslint-disable react/no-array-index-key */
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import React from "react";
import { FaSchool, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

import {
  educationData,
  projectsData,
  workExperienceData,
} from "../data/historyData";

const parseYear = (yearString) => {
  if (!yearString) return 0;
  if (yearString.includes("Present")) {
    return new Date().getFullYear();
  }
  if (yearString.includes("-")) {
    const years = yearString.split("-").map((year) => parseInt(year, 10));
    return years[1];
  }
  return parseInt(yearString, 10);
};

const combineAndSortData = (education, projects, work) => {
  const formattedEducation = education.map((item) => ({
    ...item,
    type: "education",
  }));

  const formattedProjects = projects.map((item) => ({
    ...item,
    type: "projects",
  }));

  const formattedWork = work.map((item) => ({
    ...item,
    type: "work",
  }));

  const combinedData = [
    ...formattedEducation,
    ...formattedProjects,
    ...formattedWork,
  ];

  combinedData.sort((a, b) => parseYear(b.year) - parseYear(a.year));

  return combinedData;
};

function History() {
  const historyData = combineAndSortData(
    educationData,
    projectsData,
    workExperienceData,
  );

  const iconMapping = {
    education: FaSchool,
    projects: FaProjectDiagram,
    work: FaBriefcase,
  };

  const colorMapping = {
    education: "error",
    projects: "primary",
    work: "secondary",
  };

  return (
    <div className="py-4 md:px-0 max-w-6xl m-auto text-gray-200">
      <Timeline>
        {historyData.map((item, index) => {
          const IconComponent = iconMapping[item.type];
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body3"
                fontSize={15}
                fontWeight={600}
              >
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  sx={index === 0 ? { display: "none" } : {}}
                />
                <TimelineDot color={colorMapping[item.type]}>
                  <IconComponent />
                </TimelineDot>
                <TimelineConnector
                  sx={
                    index === historyData.length - 1 ? { display: "none" } : {}
                  }
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={600}
                  className="break-all"
                >
                  {item.degree || item.name || item.position}
                </Typography>
                <Typography fontSize={13} className="break-all">
                  {item.institution || item.description || item.company}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}

export default History;
