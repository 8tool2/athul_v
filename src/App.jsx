import Hero from './sections/Hero/Hero';
import './App.css';
import { ThemeProvider } from './common/themecontext/ThemeContext';

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
