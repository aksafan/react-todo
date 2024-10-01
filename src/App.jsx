import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoContainer from "./components/TodoContainer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <TodoContainer/>
                } />
                <Route path="/new" element={<h1>New Todo List</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
