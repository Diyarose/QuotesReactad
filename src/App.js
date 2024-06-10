import logo from './logo.svg';
import './App.css';
import AddQuotes from './components/AddQuotes';
import SearchQuote from './components/SearchQuote';
import DeleteQuote from './components/DeleteQuote';
import ViewQuote from './components/ViewQuote';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddQuotes/>}/>
    <Route path='/search' element={<SearchQuote/>}/>
    <Route path='/delete' element={<DeleteQuote/>}/>
    <Route path='/view' element={<ViewQuote/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
