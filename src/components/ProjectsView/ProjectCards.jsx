import React, { useState, useEffect } from "react";
import { getAllProjects } from "../../firestore";
import { ProjectsModal } from "./ProjectsModal";

import Grid from "@mui/material/Unstable_Grid2";
import VisibilitySensor from "react-visibility-sensor";

export function ProjectCards() {
  const [active, setActive] = useState(true);
  const [projects, setProjects] = useState("");

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

  const loadData = async () => {
    let temp = [];

    const specs = await getAllProjects(`projects`);
    specs.forEach((doc) => {
      temp.push(doc.data());
    });

    temp = await temp.sort((a, b) => a.id - b.id);
    await setProjects(temp);
    // await console.log(projects.map((detail) => detail));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <VisibilitySensor
      active={active}
      onChange={handleVisibility}
      partialVisibility
    >
      {({ isVisible }) => (
        <Grid
          className={isVisible ? "projectCards appear" : "projectCards"}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.isArray(projects) && projects.length > 0
            ? projects.map((project) => (
                <Grid item sx={{ maxWidth: 400 }} xs={6}>
                  <ProjectsModal project={project} />
                </Grid>
              ))
            : ""}
        </Grid>
      )}
    </VisibilitySensor>
  );
}
