
import DisplayApiData from './components/DisplayApiData';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import { TodoList } from './components/TodoList';
import './App.css';
import { useSelector } from 'react-redux';
import { selectTheme } from './reduxSlice/themeSlice';

function App() {
  const theme = useSelector(selectTheme);
  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor, color:theme.color}}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/displayApiData" element={<DisplayApiData />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
