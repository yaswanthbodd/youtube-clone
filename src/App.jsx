import { useState } from "react"
import Home from "./pages/home/Home"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./pages/video/Video";


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
          <Router>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/video/:categoryId/:videoId" element={<Video />} />
            </Routes>
          </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
