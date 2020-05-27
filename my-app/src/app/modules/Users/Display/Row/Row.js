import React from 'react';
import Proptypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  row: {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30px, 1fr))',
  },
}));

const propTypes = {
  user: Proptypes.shape({
    name: Proptypes.string,
    age: Proptypes.string,
    id: Proptypes.number,
  }),
  onDeleteUser: Proptypes.func.isRequired,
};

const defaultProps = {
  user: { name: '', age: '', id: 0 },
};

function Row(props) {
  const { user, onDeleteUser } = props;
  const classes = useStyles();

  return (
    <Paper
      elevation={4}
      className={classes.paper}
    >
      <div className={classes.row}>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
        <button
          type="button"
          onClick={() => onDeleteUser(user)}
        >
          remove
        </button>
      </div>
    </Paper>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
