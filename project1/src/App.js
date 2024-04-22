import Home from './components/Home/Home.js';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, [])


  return(
  <div>
    <Home/>
  


  </div>
  );
} 
export default  App;