import { useState } from "react"
import Home from "./pages/home/Home"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {

  const [mode, setMode] =  useState('dark');

  const theme = createTheme({
    palette : {
      mode : mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
          <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
