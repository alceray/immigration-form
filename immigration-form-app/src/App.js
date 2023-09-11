import './index.css';
import ImmigrationForm from "./ImmigrationForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewPage from './ReviewPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/review" element={<ReviewPage/>} />
          <Route path="/" element={<ImmigrationForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
