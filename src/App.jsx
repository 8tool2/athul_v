import Hero from './sections/Hero';
import './App.css';
import { ThemeProvider } from './common/ThemeContext';

function App() {
  

  return (
    <>
    <ThemeProvider>
    <Hero/>
    </ThemeProvider>
    </>
  )
}

export default App
