import Exercises from "./components/Exercises";


import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";




const theme = createTheme({
  palette: {
    first: {
      main: "#0e2439",
    },
    second: {
      main: "#e6375a",
    },
    third: {
      main: "#f9af1a",
    },
    forth: {
      main: "#49b66d",
    },
    fifth: {
      main: '#4799eb',
    },
    sixth: {
      main: '#9270c2',
    },
    seventh: {
      main: '#e25a91',
    },
    
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
 
      <Exercises /> 
      </Box>
    </ThemeProvider>
  );
}

export default App;
