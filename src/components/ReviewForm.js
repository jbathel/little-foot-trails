import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";

import { Context } from "../Context";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const ReviewForm = () => {
  const {
      trail: [trail],
  } = useContext(Context)

  const classes = useStyles();

  const reviewData = {
      name: '',
      review: '',
      stars: '',
      user: 'rmiyazaki11@ucsbalum.com',
      trail: trail,
  }

  async function createReview(e, data) {
      e.preventDefault();
      let token = localStorage.getItem('access');
      const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
          },
          body : JSON.stringify(data),
      };
      try {
          const response = await fetch('http://localhost:8000/api/reviews/', settings);
          const data = await response.json();
          return data;
      } catch (error) {
          return error;
      }
  }

  function handleFieldChange(fieldName, e) {
    reviewData[fieldName] = e.target.value;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form onSubmit={e => createReview(e, reviewData)} className={classes.form} action="/detail" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id ="name"
                name="name"
                label="Title"
                onChange={e => {
                    handleFieldChange('name', e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="review"
                name="review"
                label="Review"
                onChange={e => {
                    handleFieldChange('review', e);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={createReview}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
};

