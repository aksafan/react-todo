import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoListPage from './components/pages/ToDoListPage';
import HomePage from './components/pages/Home';
import Layout from './components/layouts/MainLayout';
import { ROUTES } from './util/routeConsts.js';
import { TODO_TABLE } from './util/airTableConsts.js';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTES.list} element={<TodoListPage tableName={TODO_TABLE} />} />
            </Route>
        </Routes>
    </BrowserRouter>
);


export default App;
