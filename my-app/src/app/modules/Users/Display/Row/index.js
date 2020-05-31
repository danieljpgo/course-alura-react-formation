import React from 'react';
import Proptypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Container } from './styles';

const propTypes = {
  user: Proptypes.shape({
    name: Proptypes.string,
    age: Proptypes.string,
    id: Proptypes.number,
    picture: Proptypes.string,
    email: Proptypes.string,
  }),
  onDeleteUser: Proptypes.func.isRequired,
};

const defaultProps = {
  user: {
    name: '', age: '', id: 0, picture: '', email: '',
  },
};

const renderAvatar = (user) => (
  <Avatar aria-label={user && user.name} src={user && user.picture}>R</Avatar>
);

const renderText = (user) => (
  <Typography variant="h6" component="h1">{user && user.name}</Typography>
);

function Row(props) {
  const { user, onDeleteUser } = props;

  return (
    <Container>
      <Card elevation={4}>
        <CardHeader
          avatar={renderAvatar(user)}
          title={renderText(user)}
          subheader={(
            <div>
              <div>{`${user && user.email}`}</div>
              <div>{`${user && user.age} years old`}</div>
            </div>
          )}
        />
      </Card>
    </Container>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
