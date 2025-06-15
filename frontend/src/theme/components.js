
const components = (theme) => {
    const colors = theme.palette;

    return {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            '--scrollbar-track': colors.grey[400],
            '--scrollbar-thumb': colors.grey[700],
            '--scrollbar-thumb-hover': colors.grey[900],
          },
        },
      },
    };
  };
  
  export default components;
  