import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { Header } from './Components/Partials/Header/Header';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
