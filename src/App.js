import { ToastContainer } from 'react-toastify';
import './App.css'
import Discussion from './components/Discussion/Discussion';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="Discussion">
      <Discussion/>
      <ToastContainer/>
    </div>
  );
}

export default App;