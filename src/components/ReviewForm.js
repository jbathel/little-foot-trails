import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { Context } from "../Context";
import theme from "../theme";

export const ReviewForm = () => {
  const {
      trail: [trail],
  } = useContext(Context)

  const reviewData = {
      name: '',
      review: '',
      stars: 4,
      user: 1,
      trail: trail.id,
  }

   async function createReview(e, data) {
      e.preventDefault();
      const token = localStorage.getItem('token');
      console.log(reviewData)
      const response = await fetch('http://localhost:8000/api/reviews/', {
          method: 'POST',
          cache: 'default',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify(data),
      })
		.then(response => response.json())
		.catch(error => {
			console.log("error during login", error);
		})
  }

  function handleFieldChange(fieldName, e) {
    reviewData[fieldName] = e.target.value;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={theme.primary}>
        <form onSubmit={e => createReview(e, reviewData)} className={theme.form} action="/detail" noValidate>
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
                className={theme.primary}
                id="review"
                name="review"
                label="Review"
                onChange={e => {
                    handleFieldChange('review', e);
                }}
              />
            </Grid>
          </Grid>
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={theme.submit}
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

