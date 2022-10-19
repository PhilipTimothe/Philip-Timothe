import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, CardActions, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function SkillsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "85%" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
      >
        <Grid item>
          <Card elevation={0} sx={{ minWidth: 200 }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
            >
              <LanguageOutlinedIcon />
              <Typography variant="subtitle1">Languages</Typography>
            </Box>
          </Card>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid item>
          <Card elevation={0} sx={{ minWidth: 200 }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
            >
              <TerminalIcon />
              <Typography variant="subtitle1">Frameworks</Typography>
            </Box>
          </Card>
        </Grid>

        <Divider orientation="vertical" variant="middle" flexItem />

        <Grid item>
          <Card elevation={0} sx={{ minWidth: 200 }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
            >
              <LibraryBooksOutlinedIcon />
              <Typography variant="subtitle1">Libraries</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Set aside off serve.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
