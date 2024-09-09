import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextUITable from './nextUI/NextUITable';

function App() {

  return <div className="w-screen h-screen p-8 flex items-start justify-center">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NextUITable />} />
      </Routes>
    </BrowserRouter>
  </div>
  
}




export default App;
