import React, { useState } from "react";
import { ProjectsModal } from "./ProjectsModal";

import Grid from "@mui/material/Unstable_Grid2";
import VisibilitySensor from "react-visibility-sensor";

export function ProjectCards() {
  const [active, setActive] = useState(true);

  const handleVisibility = (isVisible) => {
    if (isVisible) setActive(false);
  };

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
          <Grid item sx={{ width: "75%" }} xs={6}>
            <ProjectsModal />
          </Grid>
        </Grid>
      )}
    </VisibilitySensor>
  );
}
