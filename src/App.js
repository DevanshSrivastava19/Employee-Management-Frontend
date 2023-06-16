import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import CreateEmployeeFrontend from './components/CreateEmployeeFrontend';
function App() {
  return (
    <div>
      <HeaderComponent/>
      <Router>
        <Routes>
          <Route path="/all-employee" element={<ListEmployeeComponent/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/sign-in" element={<LoginForm/>}/>
          <Route path="/sign-up" element={<CreateEmployeeFrontend/>}/>
        </Routes>
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;

