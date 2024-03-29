import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'


// components
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddEmployee from './components/AddEmployee';
import Records from './components/Records';
import Profile from './components/Profile';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Assestment from './components/Assestment';
import UserDeleteConfirmation from './components/UserDeleteConfirmation';
import UploadProfilePicture from './components/UploadProfilePicture';
import EditEmployee from './components/EditEmployee';
import UploadPDFFile from './components/UploadPDFFile';
import CreatePosition from './components/CreatePosition';
import Appointment from './components/Appointment';


//CDN Bootstrap
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename='/hraid-react'> */} 
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addemployee' element={<AddEmployee />} />
          <Route path='/records' element={<Records />} />
          <Route path='/profile/:emp_id' element={<Profile />} />
          <Route path='/assestment/:emp_id/:dp_id/:dp_position' element={<Assestment />} />
          <Route path='/delete/:emp_id' element={<UserDeleteConfirmation />} />
          <Route path='/uploadpp/:emp_id' element={<UploadProfilePicture />} />
          <Route path='/editemployee/:emp_id' element={<EditEmployee />} />
          <Route path='/uploadpdf/:emp_id' element={<UploadPDFFile />} />
          <Route path='/createposition' element={<CreatePosition />} />
          <Route path='/appointment/:emp_id/:pos_id' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
