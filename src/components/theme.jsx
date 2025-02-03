import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Default mode
    primary: {
      main: '#1B1F3B', // Deep Blue for primary elements like headers
    },
    secondary: {
      main: '#6C757D', // Grayish for subheadings
    },
    background: {
      default: '#E0E3E8', // Soft Grayish Blue for background
      paper: '#FFFFFF', // Pure white for paper components
    },
    text: {
      primary: '#1B1F3B', // Deep Blue for primary text
      secondary: '#6C757D', // Gray for secondary text
    },
    button: {
      primary: '#FFFFFF', // White for button backgrounds
      hover: '#E0E3E8', // Light grayish for hover states
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Modern font
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#1B1F3B',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#1B1F3B',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#1B1F3B',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#6C757D',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#6C757D',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
          borderRadius: '8px', 
          fontWeight: '600',
          backgroundColor: '#FFFFFF',
          color: '#1B1F3B',
          border: '1px solid #E0E3E8',
          '&:hover': {
            backgroundColor: '#E0E3E8',
          },
        },
      },
    },
  },
});

export default theme;
