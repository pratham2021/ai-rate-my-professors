import React, { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

export default function Home() {
  
  const systemPreference = useMediaQuery('(prefers-color-scheme: dark)');


  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }), [prefersDarkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/* Your app components */}
    </ThemeProvider>
  );
}
