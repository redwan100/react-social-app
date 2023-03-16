
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";


function App() {

  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

   <Box bgcolor={'background.default'} color={'text.primary'}>
    {/* Navbar  */}
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar mode={mode} setMode={setMode}/>
    <Feed />
    <Rightbar />
    </Stack>
    <Add />
   </Box>
    </ThemeProvider>
  );
}

export default App
