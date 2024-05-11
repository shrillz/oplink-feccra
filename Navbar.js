import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Styled components using the styled function from @mui/system
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2196f3',
  boxShadow: 'true',
 
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
  letterSpacing: '8px',
  color: '#fff',
  textAlign: 'left',
});


const StyledButton = styled(Button)({
  fontStyle: 'bold',
  border: '2px solid',
  marginLeft: '30px',
  color: '#fff',

});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">
          OPLINK
        </StyledTypography>
        <StyledButton color="inherit">Home</StyledButton>
        <StyledButton color="inherit">Features</StyledButton>
        <StyledButton color= 'inherit'>Sign up</StyledButton>
        <StyledButton color= 'inherit'>Log in</StyledButton>
        

      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
