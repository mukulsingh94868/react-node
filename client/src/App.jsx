import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import CreateUsers from './CreateUsers';
import EditUsers from './EditUsers';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<User />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<EditUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
