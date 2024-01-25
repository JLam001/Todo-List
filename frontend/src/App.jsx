import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {PageNotFound} from "./pages/PageNotFound";
import {TaskApiProvider} from './components/providers/TaskApiProvider';

export const App = () => {
    return (
        <TaskApiProvider>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </TaskApiProvider>
    );
};
