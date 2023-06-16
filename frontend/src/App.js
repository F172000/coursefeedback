
import './App.css';
 import {Routes,BrowserRouter,Route} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Feedback from './components/Feedback';
function App() {
  return (
    <div  >
 <BrowserRouter>
 <Routes>
        <Route exact path="/"element={<ProtectedRoutes component={Feedback}/>}/>
      </Routes> 
 </BrowserRouter>
     </div>
  );
}

export default App;
