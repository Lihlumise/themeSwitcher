import './App.css';
import SwitcherButton from './components/switcherButton';
import {ThemeProvider} from './providers/themeSwitcher/index';

function App() {

  return (
   <ThemeProvider>
      <SwitcherButton />

   </ThemeProvider>
  )
}

export default App
