import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography, Container, Box } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
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
  width: "75%",
  //   height: 500,
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export function ProjectsModal({ open, handleClose }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
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
              <ThemeProvider theme={theme}>
                <Typography
                  align="center"
                  id="spring-modal-title"
                  variant="h6"
                  component="h2"
                >
                  My Tech Skills
                </Typography>
              </ThemeProvider>
              <div className="skillsVideoWrapper">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/QUmcBmzODPA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <ThemeProvider theme={theme}>
                <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                  This video highlights everything technical skill oriented.
                  Hope you enjoy!
                </Typography>
              </ThemeProvider>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
