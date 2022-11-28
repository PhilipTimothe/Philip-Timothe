import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import {
  Typography,
  Container,
  Box,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
// web.cjs is required for IE11 support
import { useSpring, animated } from "@react-spring/web";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "90%",
  bgcolor: "background.paper",
  borderRadius: 0.5,
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export function ProjectsModal({ project }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <Card variant="outlined">
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="300"
            image={project["header-image"]}
            alt=""
          />
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid itme xs={12}>
                  <ThemeProvider theme={theme}>
                    <Typography
                      align="center"
                      id="spring-modal-title"
                      variant="h3"
                      component="h2"
                    >
                      {project["header-title"]}
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid itme xs={6}>
                  <ThemeProvider theme={theme}>
                    <Typography align="center" variant="h6">
                      {project["project-title"]}
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                      {project["project-description"]}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      {project["role-description"]}
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid itme xs={6}>
                  <Card elevation={5}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={project["project-art"]}
                      alt="Splash Content"
                    />
                  </Card>
                </Grid>
                <Grid itme xs={12}>
                  <Typography sx={{ mt: 2 }}>
                    {project["feature-description"]}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Card elevation={5}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={project["feature-image"]}
                      alt=""
                    />
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
