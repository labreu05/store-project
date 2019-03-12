import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Header from './Header';
import Meta from './Meta';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const Page = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Meta />
    <Header />
    {children}
  </MuiThemeProvider>
);

export default Page;
