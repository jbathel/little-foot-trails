import { Link } from "react-router-dom";

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { Context } from "../Context";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 500
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300
    }
  }
};

const tags = [
  "Paved",
  "Bathrooms",
  "Educational Facilities",
  "Event Facilities",
  "Other Activities",
  "Snack Shop/Cafe",
  "Gift Shop",
  "Tours",
  "First Aid",
  "Emergency Services Close"
];

export const Search = () => {
  const classes = useStyles();
  const {
    tags: [trailTags, setTrailTags]
  } = useContext(Context);

  function handleChange(event) {
    setTrailTags(event.target.value);
  }

  // function clearTrailTags() {
  //   setTrailTags([]);
  // }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
        <Select
          multiple
          value={trailTags}
          onChange={handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {tags.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={trailTags.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button component={Link}
        to="/results"
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        // onClick={clearTrailTags}
      >
        Find Your Trail
      </Button>
    </div>
  );
};
