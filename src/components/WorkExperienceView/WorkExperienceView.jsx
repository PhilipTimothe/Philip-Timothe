import React, { useState, useEffect } from "react";
import { getAllJobs } from "../../firestore";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export const WorkExperienceView = () => {
  const [jobs, setJobs] = useState("");

  const loadData = async () => {
    let temp = [];

    const specs = await getAllJobs(`jobs`);
    specs.forEach((doc) => {
      temp.push(doc.data());
    });

    temp = await temp.sort((a, b) => b.start - a.start);
    await setJobs(temp);
    console.log(jobs[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

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
    <>
      <Container maxWidth="false">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {fullDate(jobs[0]["start"], jobs[0]["end"])}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {jobs[0]["title"]}
                </Typography>
                <Typography>{jobs[0]["employer"]}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};
