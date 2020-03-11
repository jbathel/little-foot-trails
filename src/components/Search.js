// import { Link } from "react-router-dom";

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 1000
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

function getStyles(name, trailTag, theme) {
  return {
    fontWeight:
      trailTag.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export const Search = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [trailTag, setTrailTag] = React.useState([]);

  function handleChange(event) {
    setTrailTag(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
        <Select
          multiple
          value={trailTag}
          onChange={handleChange}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {tags.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={trailTag.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
