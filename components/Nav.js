import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Link from 'next/link';

const styles = {
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
};

const Nav = ({ classes }) => (
  <Toolbar>
    <Typography className={classes.title} variant="h6" color="inherit">
      <Link href="/">
        <a className={classes.title}>Store Project</a>
      </Link>
    </Typography>
    <IconButton color="inherit">
      <ShoppingBasket />
    </IconButton>
    <IconButton color="inherit">
      <AccountCircle />
    </IconButton>
  </Toolbar>
);

export default withStyles(styles)(Nav);
