import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Nav from './Nav';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="primary">
      <Nav />
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
