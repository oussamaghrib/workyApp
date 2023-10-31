import Exercises from "./components/Exercises";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    first: {
      main: "#E6E6FA",
    },
    second: {
      main: "#DA70D6",
    },
    third: {
      main: "#C9A0DC",
    },
    forth: {
      main: "#CCCCFF",
    },
    fifth: {
      main: '#89CFF0',
    },
    sixth: {
      main: '#277F84',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Exercises />
    </ThemeProvider>
  );
}

export default App;
