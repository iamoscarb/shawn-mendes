import { useThemeSwitcher } from './styles/ThemeSwitcherProvider';
import HomePage from './shawnMendes/pages/HomePage';

function App() {

  const { setThemeName } = useThemeSwitcher();
  setThemeName('home')

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
