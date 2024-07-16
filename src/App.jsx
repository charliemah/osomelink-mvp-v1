import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Home = lazy(() => import('./routes/home'))

function App() {
  const [mode, setMode] = React.useState('light')
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const defaultTheme = createTheme({ palette: { mode } })

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />    
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home mode={mode} toggleColorMode={toggleColorMode} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
