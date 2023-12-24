import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


export const App = () => {
  const {theme} = useTheme();

  return (<div className={`app ${theme}`}>
      <Navbar/>
      <AppRouter/>

    </div>);
};
