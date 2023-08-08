import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addemployees from './components/Addemployees';
import NavBar from './components/NavBar';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path='/' element={<EmployeeList></EmployeeList>}></Route>
          <Route path='/employeeList' element={<EmployeeList />}></Route>
          <Route path='/addEmployee' element={<Addemployees />}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee />} ></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
