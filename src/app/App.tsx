import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>
        Toggle
      </button>
    </div>
  );
};
