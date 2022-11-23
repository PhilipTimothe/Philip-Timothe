import React, { useState } from "react";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import { ProjectsModal } from "./ProjectsModal";

import Grid from "@mui/material/Unstable_Grid2";
import VisibilitySensor from "react-visibility-sensor";

export function ProjectCards() {
  const [active, setActive] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Card variant="outlined">
              <CardActionArea onClick={handleOpen}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://firebasestorage.googleapis.com/v0/b/philiptimothe-980a1.appspot.com/o/Project-Header-Images%2FSplash-That.jpeg?alt=media&token=5fec44e6-5a8e-48de-a3f7-b4b54c0d89e2"
                  alt="Paella dish"
                />
                <ProjectsModal open={open} handleClose={handleClose} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      )}
    </VisibilitySensor>
  );
}
