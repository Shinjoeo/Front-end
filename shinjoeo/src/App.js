import MainPage from './Pages/MainPage';
import UploadPage from './Pages/UploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<UploadPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
