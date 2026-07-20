import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <Routes>
      <Route path="/" element={<Landing isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
