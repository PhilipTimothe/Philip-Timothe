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

export function ProjectsModal() {
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
            image="https://firebasestorage.googleapis.com/v0/b/philiptimothe-980a1.appspot.com/o/Projects%2FSplash%2FSplashThat-Header.jpeg?alt=media&token=f72a5d7f-b480-4fab-b10f-9919b07647d7"
            alt="Splash Logo"
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
                      Splash
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid itme xs={6}>
                  <ThemeProvider theme={theme}>
                    <Typography align="center" variant="h6">
                      Powerful Intuitive Application
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                      The Splash application is a powerful, intuitive event
                      marketing platform. It powers the exceptional in-person,
                      virtual, and hybrid events. Empowers teams to seamlessly
                      launch, promote, and scale sophisticated event programs.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      As an Apprentice Front-end Developer I had the opportunity
                      to learn under the leadership of top industry standard
                      developers. I was tasked with updating and debugging minor
                      fundamental features of the existing robust UI.
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid itme xs={6}>
                  <Card elevation={5}>
                    <CardMedia
                      component="img"
                      height="300"
                      image="https://firebasestorage.googleapis.com/v0/b/philiptimothe-980a1.appspot.com/o/Projects%2FSplash%2FSplash.gif?alt=media&token=8bab7a63-5423-4556-bb1e-07f41680ebdc"
                      alt="Splash Content"
                    />
                  </Card>
                </Grid>
                <Grid itme xs={12}>
                  <Typography sx={{ mt: 2 }}>
                    One of the most exciting features I worked on was a feature
                    to that refaced an existing feature within UI. This
                    particular feature incorporated changes to the css grid
                    layout along with renewed component looks including buttons,
                    text, and colors; all done with current technologies such as
                    React, sytled Components, UI tech particular to Splash and
                    even a testing applications involved in insuring good
                    working code. Below is an example...
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Card elevation={5}>
                    <CardMedia
                      component="img"
                      height="300"
                      image="https://firebasestorage.googleapis.com/v0/b/philiptimothe-980a1.appspot.com/o/Projects%2FSplash%2FSplash1.png?alt=media&token=40bf9aac-57a7-4362-82da-a1d99df1df00"
                      alt="Splash Content"
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
