import React, { useEffect } from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import Logo from '../utils/thumbnail_Aryavarta_final logo_whitebg-01.png';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Aryavarta Foundation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Biometric Authentication"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <center>
              <FingerprintIcon fontSize="large" />
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} className="w-75" alt="Logo" />
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <BootstrapButton
            variant="primary" 
            size="lg" 
            block
            href="/gettingstarted"
          >
            Sign In
          </BootstrapButton>
            <Box mt={2}>
            <Grid container>
              <Grid item xs>
                <Button fullWidth>
                  <img style={{marginRight: '6px'}} alt="DocsUp" src="https://img.icons8.com/color/20/000000/google-logo.png"/>
                  Google
                </Button>
              </Grid>
              <Grid item xs>
                <Button color="primary" startIcon={<FacebookIcon />} fullWidth>Facebook</Button>
              </Grid>
            </Grid>
            </Box>
          <center>
            <IconButton onClick={handleClickOpen} color="primary" aria-label="upload picture" component="span">
              <FingerprintIcon />
            </IconButton>
          </center>
          <br />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}