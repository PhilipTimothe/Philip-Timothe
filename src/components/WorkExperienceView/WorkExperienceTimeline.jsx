import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import VisibilitySensor from "react-visibility-sensor";

let nameTitle = createTheme({
  typography: {
    h6: {
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 3,
      color: "#4F81BD",
    },
  },
});
nameTitle = responsiveFontSizes(nameTitle);

export const WorkExperienceTimeline = (props) => {
  const { jobs } = props;
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  // Function that parses date to styled standards
  let fullDate = (startDate, endDate) => {
    let startMonth = startDate
      .toDate()
      .toLocaleDateString(undefined, { month: "long" });
    let startYear = startDate.toDate().getFullYear();
    let endMonth = endDate
      .toDate()
      .toLocaleDateString(undefined, { month: "long" });
    let endYear = endDate.toDate().getFullYear();
    return startMonth + " " + startYear + " - " + endMonth + " " + endYear;
  };

  return (
    <VisibilitySensor
      active={active}
      onChange={handleVisibility}
      partialVisibility
    >
      {({ isVisible }) => (
        <Timeline
          position="alternate"
          className={isVisible ? "timeline appear" : "timeline"}
        >
          {jobs.map((job, index) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                // align="right"
                variant="body2"
                color="text.secondary"
              >
                {fullDate(job["start"], job["end"])}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <ThemeProvider theme={nameTitle}>
                  <Typography variant="h6" component="span">
                    {job["title"]}
                  </Typography>
                </ThemeProvider>
                <Typography>{job["employer"]}</Typography>
                {job["details"].map((detail) => (
                  <Typography variant="body2" color="text.secondary">
                    - {detail}
                  </Typography>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </VisibilitySensor>
  );
};
